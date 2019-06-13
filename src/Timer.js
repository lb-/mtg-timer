import React, { useEffect, useState } from 'react';
import './Timer.scss';

const onChangeMinutes = (setMinutes, min = 1, max = 99) => ({
  target: { value },
}) => {
  const num = parseInt(value, 10);
  if (isNaN(num)) {
    setMinutes('');
  } else {
    setMinutes(Math.min(Math.max(num, min), max));
  }
};

const PLAY_SYMBOL = '▶';
const PAUSE_SYMBOL = '❚❚';

const Timer = ({ minutes = 0, seconds = 0 }) => {
  const [active, setActive] = useState(false);
  const [min, setMinutes] = useState(minutes);
  const [sec, setSeconds] = useState(seconds);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!active) return;
      setSeconds(s => {
        if (s === 0) {
          setMinutes(_ => _ - 1);
          return 59;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [active]);

  return (
    <div className="Timer">
      <input
        className="Timer-minutes"
        onChange={onChangeMinutes(setMinutes)}
        value={`${min}`.padStart(2, '0')}
      />
      <span className="Timer-spacer">:</span>
      <span className="Timer-seconds">{`${sec}`.padStart(2, '0')}</span>
      <button onClick={() => setActive(!active)}>
        {active ? PAUSE_SYMBOL : PLAY_SYMBOL}
      </button>
    </div>
  );
};

export default Timer;
