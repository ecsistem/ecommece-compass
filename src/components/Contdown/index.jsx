import { useState, useEffect } from 'react';
import './styles.css';

export function Countdown ({date}) {
  const targetDate = new Date(date).getTime();
  const [timeLeft, setTimeLeft] = useState(targetDate - new Date().getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      const updatedTimeLeft = targetDate - new Date().getTime();
      setTimeLeft(updatedTimeLeft);

      if (updatedTimeLeft <= 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [targetDate]);

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return (
    <div className='card-time-countdown'>
      <div className='day-time-countdown'><span>{days}</span> <p>dias</p></div>
      <div className='hour-time-countdown'><span>{hours}</span> <p>horas</p></div>
      <div className='min-time-countdown'><span>{minutes}</span> <p>minutos</p></div>
      <div className='sec-time-countdown'><span>{seconds}</span> <p>segundos</p></div>
    </div>
  );
}
