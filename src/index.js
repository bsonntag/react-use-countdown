import { useEffect, useState } from 'react';

function useCountdown(date, now = () => Date.now()) {
  const [timeLeft, setTimeLeft] = useState(
    () => new Date(date()) - new Date(now())
  );

  useEffect(() => {
    if (timeLeft <= 0) {
      return;
    }

    const intervalTime = 1000;
    const time = timeLeft % intervalTime || intervalTime;

    const timeout = setTimeout(
      () => setTimeLeft(current => current - time),
      time
    );

    return () => clearTimeout(timeout);
  }, [timeLeft]);

  return timeLeft;
}

export default useCountdown;
