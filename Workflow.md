## 🧭 **Workflow**

### 1️⃣ **User Onboarding**

* **Sign Up / Log In** (Done)
  * Auth via **JWT + bcrypt**
* **Initial Setup**
  * Store profile preferences (theme, routines, bot mood, etc.)
  * Select default routines (or skip)
  * Choose bot mood: 🧑‍🤝‍🧑 Friendly | 🧠 Motivator | 🔥 Savage
  * Pick dashboard theme
  * Set study/work goals

### 2️⃣ **Home Dashboard**

* Dynamic overview:
  * Active streaks 🔥
  * Today’s routines 📋
  * Time tracked today ⏱️
  * Focus mode shortcut 🎯
  * Chatbot greeting & tip of the day 💬

### 3️⃣ **Time Tracking Flow**

* User starts/stops session (work/study)
  * Timer runs in foreground or background
  * Logs session to MongoDB (synced from localStorage/IndexedDB)
  * After session:

    * Prompt for task summary
    * Save as log (tagged with time, date, focus rating)

* Data visualized using:

  * **Recharts** for activity heatmap, daily/weekly charts

### 4️⃣ **Chatbot Friend**

* Persistent chat window
* Uses OpenAI or Gemini API
* Moods affect tone/style of:

  * Motivation
  * Feedback
  * Roasts (if enabled)
* Context-aware:

  * Knows session history
  * Reacts to streaks or inactivity
  * Can remind or nudge users during low focus periods

### 5️⃣ **Routines & Alarms**

* Create recurring routines (e.g., "Morning Study – 8AM daily")
* Routines show on calendar and dashboard
* Alarms trigger **Web Notifications**
* Missed routines logged automatically
* Can tie routines to goals or streaks

### 6️⃣ **Calendar Integration**

* Based on **FullCalendar**
* Visuals:

  * Tasks/routines as events
  * Completed = ✅ | Missed = ❌
  * Logs color-coded by category (Study, Break, Workout, etc.)
* Syncs with:

  * Routines
  * Time logs
  * Custom user events

### 7️⃣ **Gamification Engine**

* Tracks streaks per:
  * Routine
  * Task category
  * Daily time goal

* Visual feedback:
  * 🔥 Streak bars
  * 🏅 Badges unlocked at milestones
  * Bot celebrates or roasts based on performance

### 8️⃣ **Focus Mode + Pomodoro**

* Launch distraction-free interface
* Select:
  * Pomodoro durations (customizable)
  * Sound toggles
* Logs each pomodoro session
* Optional: Add break tasks (stretch, drink water)

### 9️⃣ **Offline Support**
* Core actions cached in:
  * `localStorage`: settings, theme, bot mood
  * `IndexedDB`: time logs, routines, sessions
* On reconnect:
  * Sync to MongoDB
  * Notify user of successful sync
* Service Workers handle caching & push updates

### 🔟 **Personalization Engine**
* Based on user history:
  * Suggest routine tweaks
  * Recommend break timing, focus length
  * Generate summary reports (daily/weekly)

* User can:
  * Customize widget layout
  * Switch between themes (light, dark, minimalist)

## 🧱 **Tech Integration Flow**

```plaintext
Frontend (React + Tailwind)
    ⬇️
Chatbot (OpenAI/Gemini) — async API
Time Tracker + Pomodoro — real-time state & UI
Routines/Calendar — FullCalendar + DB sync
    ⬇️
Backend (Node.js + Express.js)
    ⬇️
Database (MongoDB + Mongoose)
    ↔️
Offline Storage (IndexedDB + localStorage + Service Workers)
```
