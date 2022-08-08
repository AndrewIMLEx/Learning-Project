import App from './App'; //import App component for testing
import Enzyme, { shallow } from 'enzyme'; //import shallow attribute for testing a component without children.
import EnzymeAdapter from 'enzyme-adapter-react-16';// import enzyme adapter to abstract changes in react version.
import React from 'react';//import react code from node_modules for use in the file

Enzyme.configure({ adapter: new EnzymeAdapter() });


test("renders without error", () => { 
    const wrapper = shallow(<App/>);// shallow test whether App component renders without error
    expect(wrapper.find("[data-test='component-app']"));
 });