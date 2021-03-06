module.exports = {
  mode: 'jit',
  purge: [
    "**/*.html"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
        center: true
    },
    extend: {
      fontSize: {
          "h1": ["72px", "98px"]
      },
      colors: {
        "gray": {
          900: "#18191F"
        },
        "brand-purple": "#8C30F5"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}