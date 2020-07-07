const path = require('path')
const TerserWebpackPlugin = require('terser-webpack-plugin')

module.exports = {
  mode: 'none',
  entry: {
    'dck-request': './index.js',
    'dck-request.min': './index.js',
  },
  output: {
    path: path.join(__dirname, 'lib_dist'),
    filename: '[name].js',
    library: 'dckRequest',
    libraryTarget: 'umd',
    libraryExport: 'default',
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserWebpackPlugin({ test: /\.min\.js$/ })],
  },
}
