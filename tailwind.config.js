/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sharpGrotesk: ['Sharp Grotesk', 'sans-serif'],
        openSans: ['Open Sans', 'sans-serif'],
      },
      colors: {
        yellow: "#FFC107",
        purple: "#9C27B0",
        orange: "#FF5722",
        teal: "#29d6b6",
        customYellow: "#fde2a6",
        cardBg: "#fff7e6",
        cardBorder: "#fce4b8",
        cardText: "#8d6e63",
      },
    },
  },
  plugins: [],
}

