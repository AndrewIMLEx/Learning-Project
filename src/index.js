//index is a naming convention that lets a user know that they are the main files.
//The index.js component mounts the main react component onto the "root element
import React from 'react'; //imports react library(JSX) codes from 'react' folder in node-modules and
// assigns the code into a'React' variable.
import ReactDOM from "react-dom"; // imports DOM specific methods codes from 'react-dom' folder in 'node-modules'
import App from "./App"; //imports the code from the App component

var appNode = document.getElementById("learning"); //return element with  specified value
ReactDOM.render(<App/>, appNode);