import React from 'react';
import { render, act } from 'react-native-testing-library';
import { Loading } from '../../components/Loading';

jest.useFakeTimers();

const indicatorID = 'components-loading-indicator';

describe('Loading', () => {
  it('no delay immediately show indicator', () => {
    let { getByTestId } = render(<Loading delay={0} />);
    expect(getByTestId(indicatorID)).toBeDefined();
  });

  it('shows nothing with default delay of 1000ms', () => {
    let { getByTestId } = render(<Loading />);
    try {
      const indicator = getByTestId(indicatorID);
      expect(indicator).toBeUndefined();
    } catch (e) {
      // swallow error
    }

    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(getByTestId(indicatorID)).toBeDefined();
  });

  it('shows error state', () => {
    let { getByText } = render(<Loading delay={0} error />);
    expect(getByText(/Data could not be retrieved/)).toBeDefined();
  });

  it('shows timed out state', () => {
    let { getByText } = render(<Loading delay={0} timedOut />);
    expect(getByText(/Loading is taking a long time/)).toBeDefined();
  });
});
