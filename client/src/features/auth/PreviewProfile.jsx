// PreviewProfile.jsx
import React from "react";

export default function PreviewProfile({ formData, back, submit, error }) {
  return (
    <div>
      <h2>Preview Profile</h2>
      <p>Username: {formData.username}</p>
      <p>Email: {formData.email}</p>
      <p>Theme: {formData.theme}</p>
      <p>Focus Time: {formData.focusStartTime}</p>
      <p>Chatbot Mood: {formData.chatbotMood}</p>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={back}>Back</button>
      <button onClick={submit}>Submit</button>
    </div>
  );
}