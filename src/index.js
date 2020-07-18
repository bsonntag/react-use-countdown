import { useEffect, useState } from 'react';

function useCountdown(date, options = {}) {
  const { intervalTime = 1000, now = () => Date.now() } = options;
  const [timeLeft, setTimeLeft] = useState(
    () => new Date(date()) - new Date(now())
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((current) => {
        if (current <= 0) {
          clearInterval(interval);

          return 0;
        }

        return current - intervalTime;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, [intervalTime]);

  return timeLeft;
}

export default useCountdown;
