import React, { useState } from 'react';
import './Timer.scss';

const Timer = ({ minutes = 0, seconds = 0 }) => {
  const [min, setMin] = useState(minutes);
  return (
    <div className="Timer">
      <input
        className="Timer-minutes"
        onChange={({ target }) => {
          const num = parseInt(target.value, 10);
          if (isNaN(num)) {
            setMin('');
          } else {
            setMin(Math.min(Math.max(num, 1), 99));
          }
        }}
        value={min}
      />
      <span className="Timer-spacer">:</span>
      <span className="Timer-seconds">{seconds}</span>
    </div>
  );
};

export default Timer;
