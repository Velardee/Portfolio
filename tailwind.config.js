import animations from '@midudev/tailwind-animations'

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
     colors : {
      primary: '#2B2D42',
      coolGray: '#a2a3bb',
      mediumPurple: "#9395D3",
      lightPurple: "#B3B7EE"
     }
    },
  },
  plugins: [animations],
};
