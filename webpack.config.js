var webpack = require('webpack');
var path = require('path')

module.exports = {
  entry: {app:"./public/app/otherComponent.js"},
  output: {
    filename: "public/build/bundle.js",
    sourceMapFilename:"public/build/bundle.map"
  },
  devtool:'#source-map',
  module: {
    loaders: [
      { 
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel",
        query: {
          presets: ['es2015', 'react']
        }
      }
    ],
    resolve: {
      extensions: ['.js', '.jsx']
    }
  }
};