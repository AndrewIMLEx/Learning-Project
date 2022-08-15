var React = require('react');//import App component for testing
const Enzyme = require('enzyme');//import shallow attribute for testing a component without children.
const EnzymeAdapter = require('enzyme-adapter-react-16');// import enzyme adapter to abstract changes in react version.
const  App = './App';//import react code from node_modules for use in the file
const { shallow } =  require('enzyme');



Enzyme.configure({ adapter: new EnzymeAdapter() });

it('renders without crashing', () => {
    shallow(<App />);
   });
  