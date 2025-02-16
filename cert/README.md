# Local TLS Certificate for Vite Development (Windows & Linux)

To test features requiring HTTPS, such as Telegram login, you need to configure a local TLS certificate for your Vite development server.
This guide explains how to generate and configure a certificate using `step-cli`, considering both Windows and Linux environments.

<!-- TOC -->
* [Local TLS Certificate for Vite Development (Windows & Linux)](#local-tls-certificate-for-vite-development-windows--linux)
  * [Prerequisites](#prerequisites)
  * [Step 1: Add Hostname to `/etc/hosts` (Linux/macOS) or `hosts` file (Windows)](#step-1-add-hostname-to-etchosts-linuxmacos-or-hosts-file-windows)
    * [Linux/macOS:](#linuxmacos)
    * [Windows:](#windows)
  * [Step 2: Generate the TLS Certificate using `step-cli`](#step-2-generate-the-tls-certificate-using-step-cli)
  * [Step 3: Start the step-ca server:](#step-3-start-the-step-ca-server)
  * [Step 4: Generate the cookiebot certificate](#step-4-generate-the-cookiebot-certificate)
  * [Step 5: Trusting the Local CA in Browsers](#step-5-trusting-the-local-ca-in-browsers)
  * [Step 6: Running the development server](#step-6-running-the-development-server)
<!-- TOC -->

## Prerequisites

* **`step-cli`:**  Install `step-cli` following the instructions on [step ca](https://smallstep.com/docs/step-cli/). This tool simplifies TLS certificate management.
* **OpenSSL (Likely already installed):** OpenSSL is often pre-installed on Linux and macOS. For Windows, `step-cli` might include necessary OpenSSL dependencies, or you might need to install it separately if you encounter issues.


## Step 1: Add Hostname to `/etc/hosts` (Linux/macOS) or `hosts` file (Windows)

This step ensures that the domain `cookiebotfur.net` resolves to your local machine (127.0.0.1).

### Linux/macOS:

1. Open your terminal.
2. Edit the `/etc/hosts` file with root privileges (e.g., using `sudo nano /etc/hosts` or `sudo vim /etc/hosts`).
3. Add the following line at the end of the file:
```text
127.0.0.1 cookiebotfur.net
```
4. Save the file and exit the editor.

### Windows:

1. Open Notepad as Administrator. You can do this by searching for "Notepad" in the Start Menu, right-clicking on it, and selecting "Run as administrator".
2. In Notepad, open the `hosts` file located at `C:\Windows\System32\drivers\etc\hosts`.  Make sure to select "All Files (*.*)" in the file type dropdown when opening the file.
3. Add the following line at the end of the file:
```text
127.0.0.1 cookiebotfur.net
```
4. Save the file and close Notepad.


## Step 2: Generate the TLS Certificate using `step-cli`

These commands assume you have `step-cli` installed and in your system's PATH.

**Initialize the CA (if not already initialized):**

If this is your first time using `step-cli` for certificate generation, you might need to initialize the Certificate Authority (CA). Run this command in your terminal:

```shell
step ca init
```

Follow the prompts to set up your CA. You will be asked for things like your CA URL, root key, and organization. Choose a descriptive name for your CA.

You can add the following configuration to the `$(step-cli path)/config/ca.json` file to allow issuing certificate with **720 hours** of expiration.
```json
{ 
  "authority": {
    "claims": {
      "minTLSCertDuration": "5m",
      "maxTLSCertDuration": "800h"
    }
  }
}
```


## Step 3: Start the step-ca server:

The step-ca server needs to be running to sign certificates. Start it using:

```shell
step-ca $(step-cli path)/config/ca.json
```

Leave this terminal window running in the background while you generate the certificate.


## Step 4: Generate the cookiebot certificate

Generate the cookiebot certificate:
```shell
step-cli ca sign --not-after=720h cookiebot.csr cookiebot.crt
```

You should now have two important files in your project directory (where you ran these commands):

- **cookiebotfur.net.key**: The private key for **cookiebotfur.net**.
- **cookiebot.crt**: The TLS certificate for **cookiebotfur.net**, signed by your local CA.

Stop the step-ca server (Optional):

For local development, you can stop the step-ca server after generating the certificate if you don't plan to generate more certificates immediately. Press Ctrl+C in the terminal window where step-ca is running. You may need to restart it if the certificate expires or if you need to generate new certificates.


## Step 5: Trusting the Local CA in Browsers

After generating your TLS certificate with `step-cli`, your browser might still show warnings that the connection is not secure because it doesn't trust the Certificate Authority (CA) that signed the certificate. 
To eliminate these warnings during local development with `cookiebotfur.net`, you should import your local CA in your browser.

**Important Security Note:** Trusting a local CA should **only be done for development purposes** and for CAs that you control, like the one you created with `step-cli`. 
**Do not trust CAs from untrusted sources or for production environments.** 
Trusting a CA allows it to issue certificates that your browser will automatically trust, so it's crucial to only trust CAs you manage and understand.

**Steps to Trust the Local CA:**

1. **Locate the Root CA Certificate:**

When you initialized `step-ca` with `step ca init`, a root CA certificate was created. You need to find this certificate file.
The default location is usually within the `$(step-cli path)/certs` directory.
The filename will typically be something like `root_ca.crt` or `ca.crt`.

You can find the `$(step-cli path)` by running:

```shell
step-cli path
```

Then navigate to the `certs` subdirectory within that path.

2. **Export the Root CA Certificate (if needed):**
- In most cases, the `root_ca.crt` or `ca.crt` file is already in a suitable format for importing into browsers. However, if you need to export it to a different format (like `.pem` or `.crt` if it's not already in that format), you might use `step-cli` or OpenSSL, but generally this is not necessary.

3. **Import the Root CA Certificate into Your Browser:**
   The process for importing CA certificates varies slightly between browsers. Here are instructions for common browsers:
   **Google Chrome / Chromium-based Browsers (e.g., Edge, Brave):**
    * **Access Chrome Settings:**
        1. Open Chrome settings by typing `chrome://settings` in the address bar and pressing Enter, or by clicking the three vertical dots in the top right corner, selecting "Settings".
        2. In the settings menu, search for "certificates" or navigate to "Privacy and security" and then "Security".
        3. Click on "Manage certificates". This will open the operating system's certificate manager.
    * **Import the Certificate (Windows & macOS - using OS Certificate Manager):**
        1. In the Certificate Manager window, go to the "Trusted Root Certification Authorities" tab.
        2. Click the "Import..." button.
        3. The Certificate Import Wizard will open. Click "Next".
        4. Click "Browse..." and navigate to the location where your `root_ca.crt` (or `ca.crt`) file is saved. Select the file and click "Open".
        5. Click "Next".
        6. Ensure that "Place all certificates in the following store" is selected, and that the store is "Trusted Root Certification Authorities". It should default to this location.
        7. Click "Next" and then "Finish".
        8. You might see a security warning asking if you want to install this certificate. **Verify that you are importing the certificate from your local `step-ca` and understand the security implications before clicking "Yes".**
        9. Click "OK" to close the success message and "OK" to close the Certificate Manager.
   **Mozilla Firefox:**
    * **Access Firefox Settings:**
        1. Open Firefox settings by typing `about:preferences` in the address bar and pressing Enter, or by clicking the hamburger menu (three horizontal lines) in the top right corner, selecting "Settings" (or "Options" on some systems).
        2. In the settings menu, search for "certificates" or navigate to "Privacy & Security".
        3. Scroll down to the "Certificates" section and click the "View Certificates..." button.
    * **Import the Certificate (Firefox Certificate Manager):**
        1. In the Certificate Manager window, go to the "Authorities" tab.
        2. Click the "Import..." button.
        3. Navigate to the location where your `root_ca.crt` (or `ca.crt`) file is saved. Select the file and click "Open".
        4. In the "Downloading Certificate" dialog, **ensure "Trust this CA to identify websites" is checked.**  You can optionally also check "Trust this CA to identify email users" and "Trust this CA to identify software makers" if you plan to use this CA for those purposes in your local development environment, but for website development, only "Trust this CA to identify websites" is necessary.
        5. Click "OK".
        6. Click "OK" to close the Certificate Manager window.
   **Safari (macOS):**
   Safari on macOS typically uses the system's Keychain Access for certificate management.  The steps for Chrome/macOS above generally apply to Safari as well.  You might also be able to import the certificate directly into Keychain Access:
    * **Open Keychain Access:**
        1. Open Spotlight Search (Cmd + Space) and type "Keychain Access" and press Enter.
    * **Import the Certificate:**
        1. In Keychain Access, select the "System" keychain in the left sidebar.
        2. Drag and drop your `root_ca.crt` (or `ca.crt`) file into the Keychain Access window.
    * **Trust the Certificate:**
        1. Double-click the imported certificate in Keychain Access.
        2. Expand the "Trust" section.
        3. In the "When using this certificate:" dropdown, change the setting to "Always Trust".
        4. You will likely be prompted to enter your macOS user password to confirm this change. Enter your password and click "Update Settings".

4. **Restart Your Browser (Recommended):**
   After importing the CA certificate, it's generally recommended to restart your browser completely to ensure the changes are fully applied.

5. **Access `https://cookiebotfur.net` Again:**
   Now, when you navigate to `https://cookiebotfur.net` in your browser, you should no longer see certificate warnings. The connection should be recognized as secure because your browser now trusts the CA that signed the `cookiebotfur.net` certificate.

**Reversing the Trust (Removing the CA Certificate):**

If you no longer need to trust your local CA, or if you want to remove it for security reasons, you can remove it from your browser's/operating system's certificate store.

* **Chrome/Chromium (via OS Certificate Manager):**  Go back to the Certificate Manager as described above, select the "Trusted Root Certification Authorities" tab, find your CA certificate (it might be listed under the name you gave your CA during `step ca init`), select it, and click "Remove" or "Delete".
* **Firefox:**  Go back to the Firefox Certificate Manager ("Authorities" tab), find your CA certificate, select it, and click "Delete or Distrust...".
* **Safari (Keychain Access):** Open Keychain Access, select the "System" keychain, find your CA certificate, right-click on it, and select "Delete".

By following these steps, you can streamline your local development experience by eliminating browser certificate warnings for your HTTPS development server. Remember to remove the trusted CA certificate when it's no longer needed for development, especially if you are working on a shared computer or moving to a production environment.


## Step 6: Running the development server

You can change the environment variable `VITE_ENABLE_HTTPS` in .env.development to 1 to enable HTTPS.
You can run the development server:
```shell
npm run dev
```