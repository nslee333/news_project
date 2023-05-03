import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

// & `npm test -- --coverage`
// ^ Arrange -> Act -> Assert

test('App renders without crashing.', () => {
  render(<App />);
});
