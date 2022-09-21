import React from 'react';
import TestRenderer from 'react-test-renderer';
import App from './App/App.jsx';

it('renders a correctly', () => {
  const tree = TestRenderer.create(<App />).toJSON();
expect(tree).toMatchSnapshot();
});
