import React from 'react';
import Rules from '../src/Homepage/Rules';
import renderer from 'react-test-renderer';
describe("Rules page",() =>{
    it('renders the rules page', () => {
      const tree = renderer.create(<Rules />).toJSON();
      expect(tree).toMatchSnapshot();
    })
  })
