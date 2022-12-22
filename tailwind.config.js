/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.tsx', './shared/**/*.tsx', './widgets/**/*.tsx'],
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#ffffff',
      gray: '#e8e8e8',
      black: '#000000',
      cobalt: '#0044a7',
      blackSqueeze: '#eef3f9',
      dodgerBlue: '#26b1ff',
      mineShaft: '#252525',
      silver: '#cccccc',
      red: '#ff0000',
      gray: '#dddddd',
    },
    boxShadow: {
      'sm-bottom': '0px 0px 15px 0px rgba(0, 0, 0, 0.07)',
      'around-form-block': '0px 0px 10px 0px rgba(0, 0, 0, 0.1)',
    },
    screens: {
      sm: '336px',
      md: '788px',
      lg: '1044px',
      xl: '1160px',
    },
    container: {
      center: true,
      screens: {
        md: '788px',
        lg: '1044px',
        xl: '1160px',
      },
    },
    extend: {
      boxShadow: {
        card: '0px 10px 25px 0px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [
    ({ addVariant }) => {
      addVariant('child-link-active', '&:active a')
    },
  ],
}
