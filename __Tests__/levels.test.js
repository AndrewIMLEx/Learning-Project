import React from 'react';
import Levels from '../src/Homepage/Levels';
import renderer from 'react-test-renderer';

describe("Levels page",() =>{
  it('renders the levels page', () => {
    const tree = renderer.create(<Levels />).toJSON();
    expect(tree).toMatchSnapshot();
  })
});

describe("Standard level function",() =>{
  test ('calls its callback with a random number',() =>{
    function standardNum(fn) {
      return fn(Math.floor (Math.random() *10));
    };
    let mock = jest.fn();
      standardNum(mock);
      expect(mock).toBeCalledWith(expect.any(Number));
  })
});

describe("Difficult level function",() =>{
  test('calls its callback with a random number',() =>{
    function difficultNum(fn) {
      return fn(Math.floor (Math.random() *100));
    };
    let mock = jest.fn();
      difficultNum(mock);
      expect(mock).toBeCalledWith(expect.any(Number));
  })  
});

