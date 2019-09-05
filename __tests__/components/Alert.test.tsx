import React from 'react';
import { render } from 'react-native-testing-library';
import { Alert } from '../../src/components/Alert';

describe('Alert', () => {
  it('matches snapshot', () => {
    const tree = render(<Alert type="red" message="Hello" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('contains the message', () => {
    const { getByText } = render(<Alert message="Message in a bottle" />);
    expect(getByText(/Message/)).toBeDefined();
  });

  it('switches to dark mode', () => {
    const { getByText } = render(<Alert message="Dark" type="yellow" />);
    const c = getByText(/Dark/);
    expect(c.props.style[0].color).toBe('#000');
  });
});
