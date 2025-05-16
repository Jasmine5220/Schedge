// SignUpStep2.jsx
import React from "react";

export default function SignUpStep2({ formData, setFormData, next, back }) {
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <form onSubmit={(e) => { e.preventDefault(); next(); }}>
      <h2>Step 2: Preferences</h2>
      <input name="focusStartTime" type="time" value={formData.focusStartTime || ""} onChange={handleChange} />
      <select name="theme" value={formData.theme || "blue"} onChange={handleChange}>
        <option value="blue">Blue</option>
        <option value="dark">Dark</option>
        <option value="light">Light</option>
      </select>
      <input name="chatbotMood" placeholder="Chatbot Mood (e.g., Friendly)" value={formData.chatbotMood || ""} onChange={handleChange} />
      <button type="button" onClick={back}>Back</button>
      <button type="submit">Next</button>
    </form>
  );
}