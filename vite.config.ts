import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import * as fs from 'node:fs';
import path from 'node:path';


// Get the directory where vite.config.ts is located
const currentDir = __dirname;

const readLocalFile = (filePath: string) => {
  return fs.readFileSync(path.resolve(currentDir, filePath));
}


// https://vitejs.dev/config/
export default ({ mode }: { mode: string }) => {
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};

  const isHttpsEnabled = process.env.VITE_ENABLE_HTTPS === '1';

  return defineConfig({
    server: {
      port: isHttpsEnabled ? 443 : undefined,
      https: {
        key: isHttpsEnabled && process.env.VITE_HTTPS_KEY ? readLocalFile(process.env.VITE_HTTPS_KEY) : undefined,
        cert: isHttpsEnabled && process.env.VITE_HTTPS_CERT ? readLocalFile(process.env.VITE_HTTPS_CERT) : undefined,
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
         
        `,
        },
      },
    },
    build: {
      outDir: './www',
      emptyOutDir: true,
    },
    plugins: [react()],
  })
}
