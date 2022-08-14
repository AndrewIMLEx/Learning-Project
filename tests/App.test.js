//import React from 'react';//import react code from node_modules for use in the file
//import App from './App'; //import App component for testing
//import Enzyme, { shallow } from 'enzyme'; //import shallow attribute for testing a component without children.
//import EnzymeAdapter from 'enzyme-adapter-react-16';// import enzyme adapter to abstract changes in react version.

const React = require('react');
const App = "./App";
const Enzyme = require('enzyme');
const EnzymeAdapter  = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new EnzymeAdapter() });


test("renders without error", () => { 
    const App = (<App/>);// shallow test whether App component renders without error
 });