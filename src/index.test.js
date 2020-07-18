import { render, waitFor } from '@testing-library/react';
import React from 'react';
import useCountdown from '.';

const Test = ({ date }) => {
  const timeLeft = useCountdown(() => date, { now: () => date - 1000 });

  return <p>{timeLeft}</p>;
};

describe('useCountdown', () => {
  it('should render the initial time left', () => {
    const { container } = render(<Test date={Date.now() + 1000} />);

    expect(container.firstChild.textContent).toBe('1000');
  });

  it('should eventually render 0', async () => {
    const { container } = render(<Test date={Date.now() + 1000} />);

    expect(container.firstChild.textContent).toBe('1000');

    await waitFor(
      () => {
        expect(container.firstChild.textContent).toBe('0');
      },
      { timeout: 2000 }
    );
  });
});
