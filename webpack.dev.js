//configuration for webpack development server
//The path function initializes the path module that will allow finding and interaction of file paths.
const { dirname } = require("path");
const path = require("path");
//initialize webpack-merge module for merging production and development configurations.
const {merge} = require("webpack-merge"); 
//initialize common webpack settings module for use by production and development settings.
const common = require("./webpack.config.js");
//export module with merged/bundled common and development settings.
module.exports = merge(common,{
    mode:"development",//set webpack configuration to development mode
    entry:{
        index:'./src/index.js' //Add index.js as the entry point of bundling
    },
    devtool: 'inline-source-map',
    devServer:{
        static:{
            directory:path.join(dirname,"./dist"),
            hot:true,
        },
    },
    output:{
      filename:'bundle.js',
      path:path.resolve(__dirname,'dist'),
      clean:true,
    },
    module:{
        rules:[
        {
        test:/.(js|jsx)$/, //add webpack rule to configure js and jsx
        use:'babel-loader',//configure babel to convert/transpile JSX code into a browser readable js format
        exclude:/node_modules/  //rule to exclude node_modules when bundling
        }
        ]
     },  
});


