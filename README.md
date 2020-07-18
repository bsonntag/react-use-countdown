# react-use-countdown

[![CircleCI](https://circleci.com/gh/bsonntag/react-use-countdown.svg?style=svg)](https://circleci.com/gh/bsonntag/react-use-countdown)

React Hook for countdown state.

## Installation

Using npm:

```sh
$ npm install --save react-use-countdown
```

Using yarn:

```sh
$ yarn add react-use-countdown
```

Since this module uses React's new [Hooks feature](https://reactjs.org/docs/hooks-intro.html),
to try this out you'll need to install at least version `16.8.0`
of `react` and `react-dom`:

```sh
$ yarn add react@^16.8.0 react-dom@^16.8.0
```

## Usage

```js
import React from 'react';
import parseMs from 'parse-ms';
import useCountdown from 'react-use-countdown';

function Example() {
  const countdown = useCountdown(() => Date.now() + 10000);
  const { seconds } = parseMs(countdown);

  return <p>Hooked in {seconds}</p>;
}
```

## API

```js
useCountdown(
  date: () => Date | string | number,
  options?: {
    intervalTime?: number,
    now?: () => Date | string | number
  }
): number
```

Receives a function that returns a date and returns the number of milliseconds remaining until that date.

Optionally receives:

- `intervalTime`: the milliseconds between ticks, 1000 by default.
- `now`: a function that returns the current time as the second argument.

## Contributing

Please feel free to submit any issues or pull requests.

## License

MIT
