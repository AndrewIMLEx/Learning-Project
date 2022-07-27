//The path function initializes the path module that will allow finding and interaction of file paths.
const path = require('path');

//The module.exports instruct node.js to export specified codes from a given file so that it is accesed by another file.
//The entry refers to the starting point of webpack transpiling/bundling process.

module.exports = {  //webpack will take source code from ./src folder and transpile it into the dist folder
    entry: {
    app:'./src/index.js' 
},
    output:{
    path: path.resolve(__dirname,'dist')
    },

}
