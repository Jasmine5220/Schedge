import React from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaCalendarAlt, FaRobot, FaChartLine, FaUserCircle } from 'react-icons/fa';
import { useAuth } from '../store/authContext';
import '../styles/dashboard.css';

const navItems = [
  { icon: <FaClock />, label: 'Tracker' },
  { icon: <FaRobot />, label: 'Chatbot' },
  { icon: <FaCalendarAlt />, label: 'Calendar' },
  { icon: <FaChartLine />, label: 'Streaks' },
  { icon: <FaUserCircle />, label: 'Profile' },
];

export default function Dashboard() {
  const { user, logout } = useAuth();

  return (
    <div className="dashboard-container">
      {/* Navbar */}
      <nav className="navbar">
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="logo"
        >
          Schedge
        </motion.h1>
        <ul className="nav-list">
          {navItems.map((item, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.1 }}
              className="nav-item"
            >
              {item.icon}
              <span>{item.label}</span>
            </motion.li>
          ))}
        </ul>
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={logout}
          className="logout-button"
        >
          Logout
        </motion.button>
      </nav>

      {/* Welcome Message */}
      <section className="welcome-section">
        <h1>Welcome, {user?.user?.username || user?.user?.email}!</h1>
        <p>This is your dashboard. More features coming soon!</p>
      </section>

      {/* Dashboard Content */}
      <main className="dashboard-grid">
        {["Today's Tracker", "Chatbot Companion", "Routine Calendar", "Streaks & Progress", "Focus Mode", "Summary & Insights"].map((title, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * (i + 1) }}
            className="dashboard-card"
          >
            <h2 className="card-title">{title}</h2>
            <p className="card-text">
              {title === "Today's Tracker" && 'Start logging your work or study sessions.'}
              {title === "Chatbot Companion" && 'Talk to your AI pal — motivate or roast yourself!'}
              {title === "Routine Calendar" && 'Stay on top of your scheduled tasks and events.'}
              {title === "Streaks & Progress" && 'Track consistency and earn visual badges.'}
              {title === "Focus Mode" && 'Get into the zone with Pomodoro-style timers.'}
              {title === "Summary & Insights" && 'View weekly performance, goals, and suggestions.'}
            </p>
          </motion.div>
        ))}
      </main>
    </div>
  );
}
