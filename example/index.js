import { render } from 'react-dom';
import React from 'react';
import parse from 'parse-ms';
import useCountdown from '../src';

const Example = () => {
  const timeLeft = parse(useCountdown(() => Date.now() + 1000000));

  return (
    <p>
      {'Time left: '}
      {timeLeft.minutes}
      {'m '}
      {timeLeft.seconds}
      {'s'}
    </p>
  );
};

render(<Example />, document.getElementById('root'));
