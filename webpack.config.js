
var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry : "./app.js",
    output:{path: __dirname, filename:'bundle.js'},
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          }
        ]
      }
    ]
  },
  
}; 
  