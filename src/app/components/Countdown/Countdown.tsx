'use client'
import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import styles from './styles.module.scss'

interface CountdownProps {
  date: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown(
  { date }: CountdownProps
) {

  const final_date = new Date(date)

  //calculate the time left in terms of a percentage
  const calculateTimeLeftPercentage = (): number => {
    const difference = +final_date - +new Date()
    const total = +final_date - +new Date('2022-12-27')
    const percentage = (difference / total) * 100
    return percentage
  }

  const [timeLeftPercentage, setTimeLeftPercentage] = React.useState<number>(calculateTimeLeftPercentage());

  console.log('date', +date)
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +final_date - +new Date()
    console.log(difference)
    console.log(+new Date(Date.now()))
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    }

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = React.useState<TimeLeft>(calculateTimeLeft());

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
      setTimeLeftPercentage(calculateTimeLeftPercentage());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div>
      <CircularProgress className={styles['circular-countdown']} variant="determinate" value={timeLeftPercentage} />
      <div>
        <text>{timeLeft.days}</text>
        <text>Days</text>

        <text>{timeLeft.hours}</text>
        <text>Hours</text>

        <text>{timeLeft.minutes}</text>
        <text>Minutes</text>

        <text>{timeLeft.seconds}</text>
        <text>Seconds</text>
      </div>
    </div>
  );
}