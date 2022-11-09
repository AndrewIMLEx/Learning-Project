import React from 'react';
import Levels from '../src/Homepage/Levels';
import renderer from 'react-test-renderer';

describe("Levels page",() =>{
    it('renders the levels page', () => {
      const tree = renderer.create(<Levels />).toJSON();
      expect(tree).toMatchSnapshot();
    })
  })
