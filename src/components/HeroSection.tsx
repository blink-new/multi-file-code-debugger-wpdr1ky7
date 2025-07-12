import React, { useState, useEffect } from 'react';

export const HeroSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 15,
    hours: 7,
    minutes: 23,
    seconds: 45
  });

  useEffect(() => {
    const now = new Date().getTime();
    // Set concert date to 15 days, 7 hours, 23 minutes, 45 seconds from now
    const concertDate = new Date(
      now +
        15 * 24 * 60 * 60 * 1000 +
        7 * 60 * 60 * 1000 +
        23 * 60 * 1000 +
        45 * 1000
    );

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = concertDate.getTime() - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Reignite Elloria</h1>
        <p className="hero-subtitle">The Wildfire Veil Charity Concert</p>
        
        <div className="countdown">
          <h3>
            {timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0
              ? "🔴 CONCERT IS LIVE NOW!"
              : "Concert begins in:"
            }
          </h3>
          <div className="countdown-timer">
            <div className="time-unit">
              <span>{timeLeft.days.toString().padStart(2, '0')}</span>
              <small>Days</small>
            </div>
            <div className="time-unit">
              <span>{timeLeft.hours.toString().padStart(2, '0')}</span>
              <small>Hours</small>
            </div>
            <div className="time-unit">
              <span>{timeLeft.minutes.toString().padStart(2, '0')}</span>
              <small>Minutes</small>
            </div>
            <div className="time-unit">
              <span>{timeLeft.seconds.toString().padStart(2, '0')}</span>
              <small>Seconds</small>
            </div>
          </div>
        </div>

        <div className="cta-buttons">
          <a href="#donations" className="btn btn-primary" onClick={(e) => handleSmoothScroll(e, '#donations')}>
            🔥 Donate Now
          </a>
          <a href="#livestream" className="btn btn-secondary" onClick={(e) => handleSmoothScroll(e, '#livestream')}>
            🔮 Watch Livestream
          </a>
        </div>
      </div>
    </section>
  );
};