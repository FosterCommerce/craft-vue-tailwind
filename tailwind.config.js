module.exports = {
  theme: {
    extend: {}
  },
  variants: {},
  plugins: [
    require('postcss-import-ext-glob'),
    require('postcss-import'),
    require('tailwindcss'),
    require('postcss-nested'),
    require('autoprefixer')
  ]
}
