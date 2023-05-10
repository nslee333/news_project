import React from 'react';
import { render } from '@testing-library/react';
import App from '../../../../resources/js/App';

// & `npm test -- --coverage`
// ^ Arrange -> Act -> Assert

test('App renders without crashing.', () => {
  render(<App />);
});
