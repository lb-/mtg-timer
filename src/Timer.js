import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import './Timer.scss';

const onChangeMinutes = (setMinutes, min = 0, max = 99) => ({
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
const ONE_SECOND = 1000;

const Timer = ({ minutes = 0, onStartingMinutesChange }) => {
  const [hasStarted, setHasStarted] = useState(false);
  const [active, setActive] = useState(false);
  const [min, setMinutes] = useState(minutes);
  const [sec, setSeconds] = useState(0);
  const isFinished = min <= 0;
  const isLastFiveMinutes = min <= 5;

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
    }, ONE_SECOND);
    return () => clearInterval(interval);
  }, [active]);

  return (
    <div className="Timer">
      <div
        className={classNames(
          'Timer-times',
          isFinished && 'is-finished',
          isLastFiveMinutes && 'is-close',
        )}
      >
        <input
          className="Timer-minutes"
          disabled={active || hasStarted}
          onChange={onChangeMinutes(_ => {
            setMinutes(_);
            onStartingMinutesChange(_);
          })}
          value={`${min}`.padStart(2, '0')}
        />
        <span className="Timer-spacer">:</span>
        <span className="Timer-seconds">{`${sec}`.padStart(2, '0')}</span>
      </div>
      <div className="Timer-actions">
        <button
          className="Timer-action action-play-pause"
          onClick={() => {
            setActive(!active);
            setHasStarted(true);
          }}
        >
          <span className="symbol">{active ? PAUSE_SYMBOL : PLAY_SYMBOL}</span>
        </button>
        <button
          className="Timer-action action-reset"
          hidden={!hasStarted}
          onClick={() => {
            setActive(false);
            setHasStarted(false);
            setMinutes(minutes);
            setSeconds(0);
          }}
        >
          <span className="symbol">↷</span>
        </button>
      </div>
    </div>
  );
};

export default Timer;
