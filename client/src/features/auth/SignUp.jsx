import React, { useState } from "react";
import { signUp } from "./authAPI";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../store/authContext";
import '../../styles/auth.css';

export default function SignUp() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    avatar: '',
    name: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    preferenceChoice: 'default',
    theme: 'light',
    layout: 'minimal',
    startTime: '06:00',
    routineReminders: false,
    routines: [],
    botMood: 'friendly',
    roastMode: false,
    toneLevel: 50,
    morningMessage: false,
    nightPrompt: false,
    workTime: 25,
    breakTime: 5,
    soundAlerts: false,
    fullscreenFocus: false,
    trackedHabits: [],
    streakNotifications: false,
    browserNotifications: false,
    offlineMode: false,
    syncFrequency: 'real-time',
    weeklySummary: [],
    summaryStyle: 'minimal',
    goals: '',
    focusAreas: [],
    motivationLevel: 5
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;
    setForm({ ...form, [name]: val });
  };

  const handleMultiSelect = (e) => {
    const { value, checked } = e.target;
    setForm((prevForm) => {
      const selected = new Set(prevForm.routines);
      checked ? selected.add(value) : selected.delete(value);
      return { ...prevForm, routines: [...selected] };
    });
  };

  const handleFocusAreaSelect = (e) => {
    const { value, checked } = e.target;
    setForm((prevForm) => {
      const selected = new Set(prevForm.focusAreas);
      checked ? selected.add(value) : selected.delete(value);
      return { ...prevForm, focusAreas: [...selected] };
    });
  };

  const handleNext = () => {
    if (step === 1 && form.password !== form.confirmPassword) {
      setError("Passwords do not match");
    } else {
      setError("");
      setStep(step + 1);
    }
  };

  const handleBack = () => setStep(step - 1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await signUp(form);
      login(data);
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.error || "Registration failed");
    }
  };

  return (
    <div className="auth-container">
      <h2 className="auth-heading">Create Your Account</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        {step === 1 && (
          <>
            <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
            <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
            <input name="username" placeholder="Username" value={form.username} onChange={handleChange} required />
            <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} required />
            <input name="confirmPassword" type="password" placeholder="Confirm Password" value={form.confirmPassword} onChange={handleChange} required />
            <label>
              Preference:
              <select name="preferenceChoice" value={form.preferenceChoice} onChange={handleChange}>
                <option value="default">Go with Default Settings</option>
                <option value="custom">Customize My Experience</option>
              </select>
            </label>
            <div className="btn-group">
              <button type="button" onClick={handleNext}>Next</button>
            </div>
          </>
        )}

        {step === 2 && form.preferenceChoice === "custom" && (
          <>
            <h3>Dashboard Preferences</h3>
            <label>Theme:
              <select name="theme" value={form.theme} onChange={handleChange}>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
              </select>
            </label>
            <label>Layout:
              <select name="layout" value={form.layout} onChange={handleChange}>
                <option value="minimal">Minimal</option>
                <option value="detailed">Detailed</option>
              </select>
            </label>

            <h3>Routine Setup</h3>
            <label>Daily Start Time:
              <input type="time" name="startTime" value={form.startTime} onChange={handleChange} />
            </label>
            <label>
              <input type="checkbox" name="routineReminders" checked={form.routineReminders} onChange={handleChange} /> Enable Routine Reminders
            </label>
            <div>
              <label>Routines:</label><br />
              {["Workout", "Journaling", "Reading", "Night Reflection", "Planning Tomorrow", "Sleep", "Study"].map((routine) => (
                <label key={routine} className="routine-checkbox">
                  <input type="checkbox" value={routine} checked={form.routines.includes(routine)} onChange={handleMultiSelect} /> {routine}
                </label>
              ))}
              <input name="customRoutine" placeholder="Custom Routine" onBlur={(e) => {
                if (e.target.value) {
                  setForm((prev) => ({ ...prev, routines: [...prev.routines, e.target.value] }));
                  e.target.value = '';
                }
              }} />
            </div>
            <div className="btn-group">
              <button type="button" onClick={handleBack}>Back</button>
              <button type="button" onClick={handleNext}>Next</button>
            </div>
          </>
        )}

        {step === 2 && form.preferenceChoice === "default" && (
          <>
            <p>You have chosen to continue with the default settings.</p>
            <div className="btn-group">
              <button type="button" onClick={handleBack}>Back</button>
              <button type="submit">Create Account</button>
            </div>
          </>
        )}

        {step === 3 && form.preferenceChoice === "custom" && (
          <>
            <h3>Bot Personalization</h3>
            <label>Bot Mood:
              <select name="botMood" value={form.botMood} onChange={handleChange}>
                <option value="friendly">Friendly</option>
                <option value="professional">Professional</option>
                <option value="sarcastic">Sarcastic</option>
              </select>
            </label>
            <label>
              <input type="checkbox" name="roastMode" checked={form.roastMode} onChange={handleChange} /> Enable Roast Mode
            </label>
            <label>
              Tone Level:
              <div className="slider-row">
                <input
                  type="range"
                  name="toneLevel"
                  min="0"
                  max="100"
                  value={form.toneLevel}
                  onChange={handleChange}
                  className="styled-slider"
                />
                <span className="slider-value">{form.toneLevel}</span>
              </div>
            </label>
            <label>
              <input type="checkbox" name="morningMessage" checked={form.morningMessage} onChange={handleChange} /> Morning Motivation
            </label>
            <label>
              <input type="checkbox" name="nightPrompt" checked={form.nightPrompt} onChange={handleChange} /> Night Reflection Prompt
            </label>

            <h3>Focus Settings</h3>
            <label>Work Time (mins):
              <input type="number" name="workTime" min="5" value={form.workTime} onChange={handleChange} />
            </label>
            <label>Break Time (mins):
              <input type="number" name="breakTime" min="1" value={form.breakTime} onChange={handleChange} />
            </label>
            <label>
              <input type="checkbox" name="soundAlerts" checked={form.soundAlerts} onChange={handleChange} /> Enable Sound Alerts
            </label>
            <label>
              <input type="checkbox" name="fullscreenFocus" checked={form.fullscreenFocus} onChange={handleChange} /> Enable Fullscreen Focus
            </label>
            <div className="btn-group">
              <button type="button" onClick={handleBack}>Back</button>
              <button type="button" onClick={handleNext}>Next</button>
            </div>
          </>
        )}

        {step === 4 && (
          <>
            <h3>Notification & Sync Preferences</h3>
            <label>
              <input type="checkbox" name="streakNotifications" checked={form.streakNotifications} onChange={handleChange} /> Streak Notifications
            </label>
            <label>
              <input type="checkbox" name="browserNotifications" checked={form.browserNotifications} onChange={handleChange} /> Browser Notifications
            </label>
            <label>
              <input type="checkbox" name="offlineMode" checked={form.offlineMode} onChange={handleChange} /> Offline Mode Support
            </label>
            <label>Sync Frequency:
              <select name="syncFrequency" value={form.syncFrequency} onChange={handleChange}>
                <option value="real-time">Real-Time</option>
                <option value="hourly">Hourly</option>
                <option value="daily">Daily</option>
              </select>
            </label>
            <label>Weekly Summary Style:
              <select name="summaryStyle" value={form.summaryStyle} onChange={handleChange}>
                <option value="minimal">Minimal</option>
                <option value="detailed">Detailed</option>
              </select>
            </label>
            <div className="btn-group">
              <button type="button" onClick={handleBack}>Back</button>
              <button type="button" onClick={handleNext}>Next</button>
            </div>
          </>
        )}

        {step === 5 && (
          <>
            <h3>Your Goals & Motivation</h3>
            <label>What’s your goal with Schedge?
              <textarea name="goals" value={form.goals} onChange={handleChange} placeholder="e.g., Be more productive, prepare for GATE, balance study and health, etc." />
            </label>
            <label>Focus Areas:</label><br />
            {["Productivity", "Fitness", "Mental Well-being", "Consistency", "Discipline", "Study Goals", "Life Management"].map(area => (
              <label key={area} className="routine-checkbox">
                <input type="checkbox" value={area} checked={form.focusAreas.includes(area)} onChange={handleFocusAreaSelect} /> {area}
              </label>
            ))}
            <label>
              How motivated are you? (1–10)
              <div className="slider-row">
                <input
                  type="range"
                  name="motivationLevel"
                  min="1"
                  max="10"
                  value={form.motivationLevel}
                  onChange={handleChange}
                  className="styled-slider"
                />
                <span className="slider-value">{form.motivationLevel}</span>
              </div>
            </label>
            <div className="btn-group">
              <button type="button" onClick={handleBack}>Back</button>
              <button type="button" onClick={handleNext}>Next</button>
            </div>
          </>
        )}

        {step === 6 && (
          <>
            <div className="review-section">
              <div className="review-title">Review Your Details</div>
              <pre className="json-preview">{JSON.stringify(form, null, 2)}</pre>
            </div>
            <div className="btn-group">
              <button type="button" onClick={handleBack}>Back</button>
              <button type="submit">Create Account</button>
            </div>
          </>
        )}

        {error && <div className="auth-error">{error}</div>}
      </form>
    </div>
  );
}
