module.exports = {
  important: true,
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["sans-serif"],
        regular: ["AvenirNext-Regular", "sans-serif"],
        medium: ["AvenirNext-Medium", "sans-serif"],
        mediumitalic: ["AvenirNext-MediumItalic", "sans-serif"],
        light: ["AvenirNext-UltraLight", "sans-serif"],
        lightitalic: ["AvenirNext-UltraLightItalic", "sans-serif"],
        italic: ["AvenirNext-Italic", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
