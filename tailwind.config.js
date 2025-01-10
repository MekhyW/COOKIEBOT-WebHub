/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/index.css",
    "./src/pages/**/*.{js,tsjsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      'lobster': 'Chakra_Petch, Lobster, Source_Sans_3',
    },
    extend: {},
  },
  plugins: [],
}

