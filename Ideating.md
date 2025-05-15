# Web Flow / ideation
A user first SignUp/SignIn
## Basic Signup Fields (Always Present)
* **Avatar** (icon) `<- Avatar Picker`
* **Name** (text)
* **Email** (email)
* **Username** (text)
* **Password** (password)
* **Confirm Password** (password)
* **Preference Choice** (dropdown):
  * `Go with Default Settings`
  * `Customize My Experience` ← triggers additional personalization options

> **Avatar Picker**: Opens a modal with a list of selectable avatars (e.g., emoji style, flat avatars, illustrations).
### Avatar Picker Ideas:
* Flat Illustrations (boy/girl/cat/dog)
* Emoji Faces
* Sci-fi/Funny themed (alien, bot, pirate)

---

## If "Customize My Experience" is selected, show:

### 1. **Dashboard Preferences**
* **Theme** (dropdown/select):
  * Light
  * Dark
* **Layout Style** (dropdown/select):
  * Minimal
  * Detailed

### 2. **Routine Setup**
* **Default Daily Start Time** (time input)
* **Enable Routine Reminders** (checkbox)
* **Morning / Evening Routines** (multi-select or checkbox group):
  * Workout
  * Journaling
  * Reading
  * Night Reflection
  * Planning Tomorrow
  * Sleep
  * Study
  * Custom (Input)

### 3. **Chatbot Preferences**
* **Bot Mood** (dropdown/select):
  * Friendly
  * Savage
  * Motivator
  * Random Daily Surprise
* **Enable Roast Mode** (toggle or checkbox)
* **Tone Level** (slider):
  * Soft ←→ Hard Roast
* **Daily Motivation Message** (checkbox):
  * Enable Morning Boost Message
  * Enable Night Reflection Prompt

### 4. **Focus Mode Defaults**
* **Pomodoro Work Time** (number input, default: 25)
* **Pomodoro Break Time** (number input, default: 5)
* **Enable Sound Alerts** (checkbox)
* **Enable Fullscreen Focus Mode** (checkbox)

### 5. **Habit & Streak Settings**
* **Track Streaks For** (checkbox group):
  * Workout
  * Journaling
  * Reading
  * Night Reflection
  * Planning Tomorrow
  * Sleep
  * Study
  * Custom (Input)
* **Streak Notifications** (toggle/checkbox)

### 6. **Notifications & Sync**
* **Browser Notifications** (checkbox)
* **Enable Offline Mode** (checkbox)
* **Sync Frequency to Server** (dropdown):
  * Real-time
  * Every 5 mins
  * Manual Sync Only

### 7. **Weekly Summary**
* **Receive Summary via** (checkbox group):
  * In-app Notification
  * Email
* **Summary Style** (dropdown):
  * Minimal Stats
  * Detailed Insights

---

#### Add a **"Preview My Profile"** button after personalization to show a mock layout based on chosen preferences.  Below add `Back` and `Next` buttons . If `Back` is clicked, user continues to edit/change their preferences, else on clicking `Next` dashboard is opened. 

---

# Dashboard
## **Navbar Layout (Top Section)**
| Icon                   | Element                | Behavior                                                              |
| ---------------------- | ---------------------- | --------------------------------------------------------------------- |
| **Home**            | Bold when on Dashboard | Non-clickable on Dashboard, navigates to dashboard from other tabs    |
| **Hi, \[Username]** | Avatar icon + greeting | Clickable dropdown for profile options (Edit Profile, Settings, etc.) |
| **Calendar**        | Clickable tab          | Goes to Calendar view                                                 |
| **Focus**           | Clickable tab          | Navigates to Focus mode/Pomodoro timer                                |
| **Logout**          | Clickable button       | Logs out user and redirects to login/signup                           |

## **Dashboard Body Layout**

### Left Side: **Profile Card**
| Avatar Icon                 |
| ----------------------------- |
| Username: jasdev           |
| Email: jas@example.com     |
| Theme: Dark                |
| Layout: Detailed           |
| Daily Start: 06:30 AM       |
| Chatbot Mood: Motivator    |
| Current Streak: 12 Days    |
| Edit Profile Button        |

### Right Side: **Activity Heatmap + Dropdown**
#### **Heatmap (like GitHub contribution graph)**
* Displays a grid of activity logs over days.
* Shows intensity (color) based on time spent or task count.
**Above Heatmap:**
* **Activity Type Dropdown**:
  * Study
  * Focus Sessions
  * Habits
  * Pomodoro Sessions
  * Custom Activities (if created)

### Below Heatmap: **Today's Schedule**
| Today's Schedule                         |
| ----------------------------------------- |
| 07:00 AM - Journaling                 |
| 07:30 AM - Workout                    |
| 09:00 AM - Study Session              |
| 01:00 PM - Reading                    |
| 10:00 PM - Night Reflection           |

> Each task has a checkmark (done), hourglass (ongoing), or cross (missed). Optionally allow toggling status.

### Below Schedule: **What’s New & Features** Section
* What's New                           
* v1.1: Added Roast Mode in Chatbot!   
* Focus Timer now supports long breaks 
* Customize Dashboard Themes added     
* Weekly Summary Now Available         

### Footer
Include:
* About
* Privacy Policy
* Contact Support
* GitHub / Docs / Roadmap

---
