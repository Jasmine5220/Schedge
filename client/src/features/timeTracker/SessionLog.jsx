import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../styles/pomodoro.css';

export default function SessionLog() {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    axios.get('/api/pomodoro')
      .then(res => setSessions(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="log-list">
      <h3>Past Sessions</h3>
      <ul>
        {sessions.map((s, i) => (
          <li key={i}>
            {s.type} | {new Date(s.timestamp).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
}
