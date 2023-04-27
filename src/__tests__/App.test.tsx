import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

// & `npm test -- --coverage`


test('renders App without crashing.', () => {
  render(<App />);
});


