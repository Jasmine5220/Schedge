import React from 'react';
import PomodoroTimer from './PomodoroTimer';
import SessionLog from './SessionLog';
import '../../styles/pomodoro.css';

export default function PomodoroSession() {
  const handleSessionComplete = async (type) => {
    try {
      await fetch('/api/pomodoro', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type }),
      });
    } catch (err) {
      console.error('Failed to save session:', err);
    }
  };

  return (
    <div className="pomodoro-page">
      <div className="pomodoro-main">
        <h1 className="pomodoro-title">⏳ Focus Mode (Pomodoro)</h1>
        <PomodoroTimer onSessionComplete={handleSessionComplete} />
      </div>
      <div className="pomodoro-sidebar">
        <SessionLog />
      </div>
    </div>
  );
}
