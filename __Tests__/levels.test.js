import React from 'react';
import Levels from '../src/Homepage/Levels';
import renderer from 'react-test-renderer';

describe("Levels page",() =>{
  it('renders the levels page', () => {
    const tree = renderer.create(<Levels />).toJSON();
    expect(tree).toMatchSnapshot();
  })
});

describe("Standard Number",() =>{
  test ('calls its callback with a random number',() =>{
    function standardNum(fn) {
      return fn(Math.floor (Math.random() *10));
    };
    let mock = jest.fn();
      standardNum(mock);
      expect(mock).toBeCalledWith(expect.any(Number));
  })
});

describe("Difficult Number",() =>{
  test('calls its callback with a random number',() =>{
    function difficultNum(fn) {
      return fn(Math.floor (Math.random() *100));
    };
    let mock = jest.fn();
      difficultNum(mock);
      expect(mock).toBeCalledWith(expect.any(Number));
  });  
});

describe("Blank Input",() =>{
  test('feedback on blank input',() =>{
    testData = [
      {guessedValue:"",Result:"Enter valid number"},
      {guessedValue: -1,Result:"Enter valid number"},
      {guessedValue: 101,Result:"Enter valid number"}
    ]
    });
    const testData = require(setname);

    testData.forEach((testItem) => {
      expect(setName(testItem.guessedValue)).toBe(testItem.Result);
    });
});

/*describe("Standard Level",() =>{
  test('Standard comparison statement',() =>{
    const standardNum = Math.floor (Math.random() *10);

    })
  })*/

  /*describe("Difficult Level",() =>{
    test('Difficult comparison statement',() =>{
      const difficultNum = Math.floor (Math.random() *10);
  
      })
    })*/
