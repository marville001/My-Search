module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '480px',
      'md': '547px',
      'lg': '768px',
      'xl': '1024px',
      '2xl': '1680px',
    },
    extend: {
      colors:{
        'primary':"#64e3e3"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
