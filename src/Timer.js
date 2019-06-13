import React, { useState } from 'react';
import './Timer.scss';

const onChangeMinutes = (setMin, min = 1, max = 99) => ({
  target: { value },
}) => {
  const num = parseInt(value, 10);
  if (isNaN(num)) {
    setMin('');
  } else {
    setMin(Math.min(Math.max(num, min), max));
  }
};

const Timer = ({ minutes = 0, seconds = 0 }) => {
  const [min, setMin] = useState(minutes);
  return (
    <div className="Timer">
      <input
        className="Timer-minutes"
        onChange={onChangeMinutes(setMin)}
        value={min}
      />
      <span className="Timer-spacer">:</span>
      <span className="Timer-seconds">{seconds}</span>
    </div>
  );
};

export default Timer;
