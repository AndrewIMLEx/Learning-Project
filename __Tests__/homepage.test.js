import React from 'react';
import Homepage from '../src/Homepage/Homepage';
import renderer from 'react-test-renderer';
describe("Homepage page",() =>{
    it('renders the landing page', () => {
      const tree = renderer.create(<Homepage />).toJSON();
      expect(tree).toMatchSnapshot();
    })
  })
  
