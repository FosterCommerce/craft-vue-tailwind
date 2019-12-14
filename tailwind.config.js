module.exports = {
  theme: {
    extend: {}
  },
  variants: {},
  plugins: [
    require('postcss-import-ext-glob'),
    require('postcss-import'),
    require('postcss-mixins'),
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('tailwindcss'),
    require('tailwindcss-grid')({
      grids: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      gaps: {
        0: '0',
        4: '1rem',
        8: '2rem',
        '4-x': '1rem',
        '4-y': '1rem',
      },
      autoMinWidths: {
        '16': '4rem',
        '24': '6rem',
        '300px': '300px',
      },
      variants: ['responsive'],
    }),
    require('autoprefixer')
  ]
}
