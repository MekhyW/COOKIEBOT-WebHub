import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgba(var(--background))",
        foreground: "rgba(var(--foreground))",
        surface: "rgba(var(--surface))",
        primary: "rgba(var(--primary))",
        secondary: "rgba(var(--secondary))",
        tertiary: "rgba(var(--tertiary))",
        quaternary: "rgba(var(--quaternary))",
        darkcolor: "rgba(var(--dark))",
        lightcolor: "rgba(var(--light))",

        warning: "rgba(var(--warning))",
        success: "rgba(var(--success))",
        error: "rgba(var(--error))"
      },
      fontFamily: {
        sans: "var(--font-chakra)",
        mono: "var(--font-lobster)"
      },
    },
  },
  plugins: [],
  darkMode: "class"
};

export default config;
