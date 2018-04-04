module.exports = {
  plugins: [
    require('postcss-import')({}),
    require('postcss-css-variables')({}),
    require('postcss-flexbugs-fixes')({}),
    require('autoprefixer')({ browsers: ['> 1%', 'last 2 versions'] })
  ]
}
