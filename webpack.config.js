const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: './src/main.js',
  output: {
    filename: './bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'standard-loader',
        exclude: /(node_modules|bower_components)/,
        options: {
          error: false,
          snazzy: true,
          parser: 'stylelint'
        }
      }]
  }

}
