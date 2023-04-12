/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        //add CormorantGaramond fonts (light, lightitalic, regular, italic)
        serif: ["Cormorant Garamond", "serif"],
      },
      spacing: {
        "11/12": "91.6666%",
        430: "430px",
        740: "740px",
      },
    },
  },
  plugins: [],
};
