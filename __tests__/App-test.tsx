import React from 'react';
import { render } from 'react-native-testing-library';
import { App } from '../src/App';

test('app renders', () => {
  render(<App />);
});
