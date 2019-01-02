const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpacPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpacPlugin({
      title: 'Production'
    })
  ]
}
