/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
       backgroundImage: {
        'light-bg': "url('/images/mobile-light.svg')",
        'dark-bg': "url('/images/mobile-dark.svg')",
        'light-bg-md': "url('/images/tablet-light.svg')",
        'dark-bg-md': "url('/images/tablet-dark.svg')",
        'light-bg-l': "url('/images/desktop-light.svg')",
        'dark-bg-l': "url('/images/desktop-dark.svg')",
      },
      colors: {
        purple: { 
          600: '#a729f5',
          100: '#f6e7ff'
        },
        blue: {
          850: '#3b4d66'
        },
        light: {
          background: "#f4f6fa",
          primary: "#313e51",
          secondary: "#626c7f",
        },
        dark: {
          background: "#313e51",
          primary: "#313e51",
          secondary: "#abc1e1",
        },
      },
      fontFamily: {
        typo: ["Rubik"],
      },
    },
  },
  plugins: [],
};
