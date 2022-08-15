const React = 'react';//import App component for testing
const Enzyme = require('enzyme',{ shallow } );//import shallow attribute for testing a component without children.
const EnzymeAdapter = require('enzyme-adapter-react-16');// import enzyme adapter to abstract changes in react version.
const  App = require('./App');//import react code from node_modules for use in the file

Enzyme.configure({ adapter: new EnzymeAdapter() });


test("renders without error", () => { 
    const wrapper = shallow(<App/>);// shallow test whether App component renders without error
    expect(wrapper.find("[data-test='component-app']"));
 });