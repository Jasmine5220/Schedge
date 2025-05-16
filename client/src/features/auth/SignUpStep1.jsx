// SignUpStep1.jsx
import React from "react";

export default function SignUpStep1({ formData, setFormData, next }) {
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <form onSubmit={(e) => { e.preventDefault(); next(); }}>
      <h2>Step 1: Basic Info</h2>
      <input name="username" placeholder="Username" onChange={handleChange} value={formData.username || ""} required />
      <input name="email" type="email" placeholder="Email" onChange={handleChange} value={formData.email || ""} required />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} value={formData.password || ""} required />
      <input name="confirmPassword" type="password" placeholder="Confirm Password" onChange={handleChange} value={formData.confirmPassword || ""} required />
      <label>Choose:</label>
      <select name="preferenceChoice" value={formData.preferenceChoice || "default"} onChange={handleChange}>
        <option value="default">Go with Default Settings</option>
        <option value="custom">Customize My Experience</option>
      </select>
      <button type="submit">Next</button>
    </form>
  );
}