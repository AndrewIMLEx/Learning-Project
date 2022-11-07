// General webpack settings will be located on this file
const webpack = require('webpack');
//The path function initializes the path module that will allow finding and interaction of file paths.
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

//The module.exports instruct node.js to export specified codes from a given file so that it is accesed by another file.
//The entry refers to the starting point of webpack transpiling/bundling process.

module.exports = {  //webpack will take source code from ./src folder index.js and transpile it to bundle.js in the dist folder
  entry: ['./src/index.js'],
  output: {
      path: path.resolve(__dirname,'dist'),
      filename: '[name].bundle.js',
      publicPath: '/',
      clean: true,
  },
  resolve: {
      extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, 
        use: ['babel-loader'],
        exclude: [/node_modules/, /__tests__/],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(woff|ttf)$/i,
        type: 'asset/resource'
      }
    ]
  },
  devServer: {
    allowedHosts:['.herokuapp.com'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Production',
      template: path.join(__dirname, 'src', 'index.html'),
    }),
  ],
};
