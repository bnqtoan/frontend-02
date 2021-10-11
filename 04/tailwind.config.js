module.exports = {
  mode: 'jit',
  purge: [
    "**/*.html"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        'sieu-lon': '800px'
      },
      borderRadius: {
        'ong-design': '11px'
      },
      fontFamily : {
        body: "'Inter', sans-serif"
      },
      colors: {
        'primary': '#8C30F5',
        'secondary': '#ffed4a',
        'danger': '#e3342f',
      },
      fontSize: {
        'h1': ['72px', '98px']
      }
    },
  },
  variants: {
    blur: ['hover', 'focus'],
    extend: {
      
    },
  },
  plugins: [],
}
