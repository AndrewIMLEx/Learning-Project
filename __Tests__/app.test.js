import React from 'react';
import App from 'App/App.jsx';
import renderer from 'react-test-renderer';


describe("landing page",() =>{
  it('renders the landing page', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  })
})

test('background color should be green',() =>{
    renderer(<App />);
    const element = screen.getByText('Hello World! Its me coming')
    const styles = getComputedStyle(element);

    expect(styles.backgroundColor).toBe('green')
});
