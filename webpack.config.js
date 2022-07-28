//The path function initializes the path module that will allow finding and interaction of file paths.
const path = require('path');

//The module.exports instruct node.js to export specified codes from a given file so that it is accesed by another file.
//The entry refers to the starting point of webpack transpiling/bundling process.

module.exports = {  //webpack will take source code from ./src folder index.js and transpile it to bundle.js in the dist folder
    entry: {
    app:'./src/index.js' 
},
output:{
path: path.resolve(__dirname,'dist'),
filename: 'bundle.js' //script to bundle the contents of index.js to bundle.js
},
module:{
rules:[
{
test:/.(js|jsx)$/, //add webpack rule to configure js and jsx
exclude:/node_modules/  //rule to exclude node_modules when bundling
}
]
},
};
