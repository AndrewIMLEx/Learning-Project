import React from 'react';
import App from 'App/App.jsx';
import renderer from 'react-test-renderer';


describe("App rendering specification",() =>{
  it('renders the landing page', () => {
    const component = renderer.create(<App />)
  })
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();

});
