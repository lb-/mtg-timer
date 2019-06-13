import React from 'react';
import './Timer.scss';

const Timer = ({ minutes = 0, seconds = 0 }) => (
  <div className="Timer">
    <span clasName="Timer-minutes">{minutes}</span>
    <span className="Timer-spacer">:</span>
    <span clasName="Timer-seconds">{seconds}</span>
  </div>
);

export default Timer;
