var webpack = require('webpack');

var conf = {
  devtool: '#source-map',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: './dist'
  },
  module: {
    loaders:[
      { test: /.\js$/,loader: 'babel!eslint'},
      { test: /\.css/, loader: "style-loader!css-loader" },
      { test: /\.html/, loader: "html-loader" }]
  }
  // plugins: [
  //   new webpack.optimize.UglifyJsPlugin()
  // ]
}

module.exports = conf;
