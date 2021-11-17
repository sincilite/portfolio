module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'vollkorn': ['"Vollkorn"'],
        'open-sans': ['"Open Sans"'],
      },
      fontWeight: {
        normal: 400,
        extrabold: 800,
        'extra-bold': 800,
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
