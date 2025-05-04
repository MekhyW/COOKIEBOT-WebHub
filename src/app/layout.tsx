import type { Metadata } from "next";
import "@/style/globals.scss";
import { getLocale, getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { fonts } from "@/style/fonts";
import { NextThemeProvider } from "@/providers/themes";
import Navbar from "@/components/all/Navbar";
import { Footer } from "@/components/all/Footer";
import Splash from "@/components/all/Splash";
import { ReactNode } from "react";
import { BackgroundImage } from "@/components/ui/MovingBackground";
import QueryProvider from '../providers/QueryProvider';

export const metadata: Metadata = {
  metadataBase: new URL('https://cookiebotfur.net'),
  title: {
    default: "Cookiebot",
    template: "%s | Cookiebot"
  },
  openGraph: {
    images: [
      {
        url: '/cookiebot_avatar.jpeg',
        width: 1200,
        height: 630
    }
    ]
  },
  description: "O bot mais crocante do Telegram!",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${fonts.map(font => font.variable).join(' ')} dark`} suppressHydrationWarning={true}>
      <body>
        <QueryProvider>
          <Splash />
          <div className="fixed top-0 left-0 w-full h-full -z-10"></div>
          <BackgroundImage>
            <NextIntlClientProvider messages={messages}>
              <NextThemeProvider>
                <Navbar/>
                {children}
                <Footer/>
              </NextThemeProvider>
            </NextIntlClientProvider>
          </BackgroundImage>
        </QueryProvider>
      </body>
    </html>
  );
}
