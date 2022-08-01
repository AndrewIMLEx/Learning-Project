//configuration for webpack development server
//The path function initializes the path module that will allow finding and interaction of file paths.
//initialize webpack-merge module for merging production and development configurations.
const {merge} = require("webpack-merge"); 
//initialize common webpack settings module for use by production and development settings.
const common = require("./webpack.config.js");
//export module with merged/bundled common and development settings.
module.exports = merge(common,{
    mode:"development",//set webpack configuration to development mode
    devtool: 'inline-source-map',
    devServer:{
        'static':{
            directory:'./dist',

        },
    },  
});


