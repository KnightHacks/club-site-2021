module.exports = {
  important: true,
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        KHgold: {
          DEFAULT: "#dbc04a",
          "slightly-dark": "#d9bd3f",
        },
        KHblue: "#181d41",
        KHnavbar: {
          DEFAULT: "#3b3d5b",
          dark: "#32344d",
        },
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
      screens: {
        xxs: "320px",
        xs: "400px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      borderStyle: ["hover", "focus"],
      borderWidth: ["hover", "focus"],
      textColor: ["active"],
    },
  },
  plugins: [],
};
