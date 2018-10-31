# react-use-countdown

[![CircleCI](https://circleci.com/gh/bsonntag/react-use-countdown.svg?style=svg)](https://circleci.com/gh/bsonntag/react-use-countdown)
[![Coverage Status](https://coveralls.io/repos/github/bsonntag/react-use-countdown/badge.svg?branch=master)](https://coveralls.io/github/bsonntag/react-use-countdown?branch=master)

React hook for countdown state.

## Disclaimer

This module uses the upcoming [React Hooks API Proposal](https://reactjs.org/docs/hooks-intro.html)
which is **subject to change** until released to a final version.

This means that the API of this module is also subject to change.
Please **don't** use it on a production application.

## Installation

Using npm:

```sh
$ npm install --save react-use-countdown
```

Using yarn:

```sh
$ yarn add react-use-countdown
```

Since this module uses React's upcoming Hooks feature,
to try this out you'll need to install the `16.7.0-alpha.0` version
of `react` and `react-dom`:

```sh
$ yarn add react@16.7.0-alpha.0 react-dom@16.7.0-alpha.0
```

## Usage

```js
import React from 'react';
import parseMs from 'parse-ms';
import useCountdown from 'react-use-countdown';

function Example() {
  const countdown = useCountdown(Date.now() + 10000);
  const { seconds } = parseMs(countdown);

  return (
    <p>
      Hooked in {seconds}
    </p>
  );
}
```

## API

```js
useCountdown(
  date: () => Date | string | number,
  now?: () => Date | string | number
): number
```

Receives a function that returns a date and returns the number of milliseconds remaining until that date.
Optionally receives a function that returns the current time as the second argument.

## Contributing

Please feel free to submit any issues or pull requests.

## License

MIT
