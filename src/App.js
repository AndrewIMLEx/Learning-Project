import React from 'react'; //imports react library(JSX) codes from 'react' folder in node-modules and
// assigns the code into a'React' variable.
import { hot } from 'react-hot-loader/root';
const App = () => {//A JSX function made of Javascript and XML code using arrow function that
//returns the word 'Hello world'
    return <div>
    Hello World!
    </div>;
    };
export default hot(App); //Used to export the App function to be used by other components
