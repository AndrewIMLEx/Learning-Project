//configuration for webpack development server
//The path function initializes the path module that will allow finding and interaction of file paths.
const path = require("path");
//initialize webpack-merge module for merging production and development configurations.
const {merge} = require("webpack-merge"); 

const dotenv = require('dotenv');
// initialize the dotenv package and the process.env
dotenv.config();
//initialize common webpack settings module for use by production and development settings.
const common = require("./webpack.config.js");
//export module with merged/bundled common and development settings.
//set webpack configuration to development mode
module.exports = merge(common, {
    mode: "development",
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
          port: process.env.PORT,
        hot: 'only',
    },
});
