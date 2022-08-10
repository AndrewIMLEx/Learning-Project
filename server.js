var path = require('path'); //Node.js module that is used to transform paths
var express = require('express'); //Module that returns a function reference for express

var app = express(); //Calls express method as an object

app.use(express.static(path.join(__dirname, 'dist'))); //the express app looks up for files relative to the static directory 'dist'
//path.join returns a normalized path by merging two paths together
app.set('port', process.env.PORT || 8080); //the app assigns a port number where data endpoints will be directed to a particular service