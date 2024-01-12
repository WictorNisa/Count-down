import React, { useState, useEffect } from "react";
import "./CountDown.css";

function CountDown({ targetDate }) {
  const calculateTimeRemaining = () => {
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [targetDate]);

  return (
    <section className="count-down-outer">
      <h1 className="title">We're launching soon</h1>
      <div className="count-down-wrapper">
        <div className="count-down-box">
          <div className="count-down-inner-box">
            <h3 className="time-number">{timeRemaining.days}</h3>
          </div>
          <p className="time-text">Days</p>
        </div>
        <div className="count-down-box">
          <div className="count-down-inner-box">
            <h3 className="time-number">{timeRemaining.hours}</h3>
          </div>
          <p className="time-text">Hours</p>
        </div>
        <div className="count-down-box">
          <div className="count-down-inner-box">
            <h3 className="time-number">{timeRemaining.minutes}</h3>
          </div>
          <p className="time-text">Minutes</p>
        </div>
        <div className="count-down-box">
          <div className="count-down-inner-box">
            <h3 className="time-number">{timeRemaining.seconds}</h3>
          </div>
          <p className="time-text">Seconds</p>
        </div>
      </div>
    </section>
  );
}

export default CountDown;
