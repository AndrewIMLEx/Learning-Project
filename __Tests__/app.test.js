import TestRenderer from 'react-test-renderer';
import React from 'react';

import App from './App';

it('renders a correctly', () => {
  const tree = TestRenderer.create(<App/>).toJSON();
  expect(tree).toMatchSnapshot();
});


