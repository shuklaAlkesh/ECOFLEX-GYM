import React from 'react';
import image5 from './image/img5.jpg';
// import image5 from './image/img10.jpg';
const WorkOutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>Top Workout Sessions</h1>
        <p>
          Join our expert-led workout sessions designed for all fitness levels. Whether you're looking to build strength, improve endurance, or find balance, our variety of classes will help you reach your fitness goals.
        </p>
        <img src={image5} alt="Workout Session" className="session-image" />
      </div>
      <div className="wrapper">
        <h1>Featured Bootcamps</h1>
        <p>
          Our high-intensity bootcamps combine cardio, strength, and agility training to give you a full-body workout. Join us to push your limits and achieve a fitter, stronger version of yourself!
        </p>
        <div className="bootcamps">
          <div>
            <h4>Strength Bootcamp</h4>
            <p>A focused strength-building workout designed to improve muscle endurance and power. Train under professional coaches and feel the difference!</p>
          </div>
          <div>
            <h4>Cardio Blitz</h4>
            <p>Burn calories and increase cardiovascular endurance with this high-energy session. Get your heart pumping and sweat it out!</p>
          </div>
          <div>
            <h4>Flexibility & Balance</h4>
            <p>Focus on improving flexibility and core strength with this restorative workout. Perfect for athletes and anyone looking to enhance range of motion.</p>
          </div>
          <div>
            <h4>HIIT Extreme</h4>
            <p>High-Intensity Interval Training (HIIT) that challenges your limits with explosive movements and quick recovery times. Torch fat and build lean muscle in no time!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkOutSessions;
