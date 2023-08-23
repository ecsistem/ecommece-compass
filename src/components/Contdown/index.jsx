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
      <div className='day-time-countdown'><span className='span-countdown'>{days}</span> <p className='p-countdown'>dias</p></div>
      <div className='hour-time-countdown'><span className='span-countdown'>{hours}</span> <p className='p-countdown'>horas</p></div>
      <div className='min-time-countdown'><span className='span-countdown'>{minutes}</span> <p className='p-countdown'>minutos</p></div>
      <div className='sec-time-countdown'><span className='span-countdown'>{seconds}</span> <p className='p-countdown'>segundos</p></div>
    </div>
  );
}
