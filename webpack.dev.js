//configuration for webpack development server
//The path function initializes the path module that will allow finding and interaction of file paths.
//initialize webpack-merge module for merging production and development configurations.
const {merge} = require("webpack-merge"); 
//initialize common webpack settings module for use by production and development settings.
const common = require("./webpack.config.js");
//export module with merged/bundled common and development settings.
module.exports = merge(common,{
    devtool: "inline-source-map",
    mode:"development",//set webpack configuration to development mode
    devServer:{
        'static':{
            hot:true
        },
    }, 
    module:{
        rules:[
        {
        test:/.(js|jsx)$/, //add webpack rule to configure js and jsx
        use:'babel-loader',//configure babel to convert/transpile JSX code into a browser readable js format
        exclude: /node_modules/  //rule to exclude node_modules when bundling
        }
        ]
        }, 
});

