module.exports = {
  important: true,
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        KHgold: "#dbc04a",
        KHblue: "#181d41",
        KHnavbar: "#3b3d5b",
      },
      fontFamily: {
        sans: ["sans-serif"],
        regular: ["Avenir Next Regular", "sans-serif"],
        medium: ["Avenir Next Medium", "sans-serif"],
        mediumitalic: ["Avenir Next Medium Italic", "sans-serif"],
        light: ["Avenir Next Ultra Light", "sans-serif"],
        lightitalic: ["Avenir Next Ultra Light Italic", "sans-serif"],
        italic: ["Avenir Next Italic", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
