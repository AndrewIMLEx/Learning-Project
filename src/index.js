//index is a naming convention that lets a user know that they are the main files.
//The index.js component mounts the main react component onto the "root element
import React from 'react'; //imports react library(JSX) codes from 'react' folder in node-modules and
// assigns the code into a'React' variable.
import ReactDOM from "react-dom"; // imports DOM specific methods codes from 'react-dom' folder in 'node-modules'
import App from "./App.js"; //imports the code from the App component

ReactDOM.render( //React.StrictMode checks for problems in it's descendant components (App)
    <React.StrictMode> 
    <App />
  </React.StrictMode>,
  document.getElementById("learning") //the method will get an object matching the ID learning from index.html
  //which will be rendered/displayed.
);