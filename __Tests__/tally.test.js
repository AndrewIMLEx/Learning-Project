import React from 'react';
import Tally from '../src/Homepage/Tally';
import renderer from 'react-test-renderer';
describe("Tally page",() =>{
    it('renders the tally page', () => {
      const tree = renderer.create(<Tally />).toJSON();
      expect(tree).toMatchSnapshot();
    })
  })
