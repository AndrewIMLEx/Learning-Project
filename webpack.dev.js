//configuration for webpack development server
//The path function initializes the path module that will allow finding and interaction of file paths.
const path = require("path");
//initialize webpack-merge module for merging production and development configurations.
const {merge} = require("webpack-merge"); 
//iitialize common webpack settings module for use by production and development settings
const common = require("./webpack.config.js")