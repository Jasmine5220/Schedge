# Schedge - 📚 Your Personal Productivity Pal

**Schedge** is a full-featured productivity web application built with the MERN stack that helps you track your time, stick to routines, stay consistent with streaks, and have fun while doing it — with a chatbot that talks, motivates, and even roasts you when needed.

---

## 🚀 Features

### 🕒 Time Tracker
- Track daily study/work sessions
- Visualize activity with charts
- Save logs and review historical performance

### 🧠 Chatbot Friend
- Smart conversation powered by AI
- Choose moods: Friendly | Savage | Motivator
- Roasts you when you slack off (toggleable)

### ⏰ Alarms & Routines
- Set daily alarms & personalized routines
- Reminders for tasks and habits
- Notification support (via browser)

### 📅 Calendar Integration
- View scheduled tasks, sessions, and events
- Syncs with routines and alarms
- Highlight completed and missed tasks

### 🔥 Streaks & Gamification
- Track habit streaks and milestones
- Progress bar and visual badges
- Encouraging or roast-style streak responses

### 🎨 Personalization
- Customize dashboard layout and theme
- Smart recommendations based on behavior
- Daily/weekly summaries

### ⏳ Focus Mode + Pomodoro Timer
- Distraction-free UI with timer blocks
- Custom work/break durations
- Optional sound notifications

### 📶 Offline Mode
- Works seamlessly offline using:
  - `localStorage` for quick access
  - `IndexedDB` for caching user data
- Syncs back to server when online

---

## 🛠 Tech Stack

- **Frontend:** React, Tailwind CSS, Recharts, FullCalendar
- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Authentication:** JWT + bcrypt
- **APIs:** OpenAI / Gemini for chatbot (optional)
- **Other Tools:** Service Workers, IndexedDB, Web Notifications

---

## 📁 Project Structure (Sample)
```

schedge/
├── client/                 # React Frontend
│   ├── components/         # Reusable UI Components
│   ├── pages/              # Pages like Home, Chat, Tracker
│   ├── hooks/              # Custom React Hooks
│   └── utils/              # Utility Functions
├── server/                 # Express Backend
│   ├── models/             # Mongoose Schemas
│   ├── routes/             # REST API Endpoints
│   ├── controllers/        # Route Logic and Business Functions
│   └── middleware/         # Authentication & Error Handling
└── README.md               # Project Documentation

```
---

## 🧪 Run Locally

### Frontend
```bash
cd client
npm install
npm start
````

### Backend

```bash
cd server
npm install
npm run dev
```

> Add a `.env` file with your MongoDB URI and JWT secret.

---

## 🙌 Contributing
Feel free to fork this repo, suggest features, or submit PRs. Every contribution helps make *Schedge* better!

---

## 📄 License

MIT License

---

## 💬 Say Hi!

Made with 💙 and a little bit of sass by \Jasmine5220
