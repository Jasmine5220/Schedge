import React, { useState, useEffect } from 'react';
import '../../styles/pomodoro.css';

export default function PomodoroTimer({ onSessionComplete }) {
  const WORK_DURATION = 25 * 60;
  const BREAK_DURATION = 5 * 60;

  const [secondsLeft, setSecondsLeft] = useState(WORK_DURATION);
  const [isRunning, setIsRunning] = useState(false);
  const [isBreak, setIsBreak] = useState(false);

  useEffect(() => {
    if (!isRunning) return;
    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          const newBreak = !isBreak;
          setIsBreak(newBreak);
          setIsRunning(false);
          onSessionComplete(newBreak ? 'Break' : 'Work');
          return newBreak ? BREAK_DURATION : WORK_DURATION;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isRunning, isBreak, WORK_DURATION, BREAK_DURATION, onSessionComplete]);

  const formatTime = (secs) => `${Math.floor(secs / 60)}:${String(secs % 60).padStart(2, '0')}`;

  return (
    <div className="pomodoro-box">
      <h2>{isBreak ? 'Break Time' : 'Focus Time'}</h2>
      <div className="timer-display">{formatTime(secondsLeft)}</div>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? 'Pause' : 'Start'}
      </button>
    </div>
  );
}
