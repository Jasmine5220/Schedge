import React, { useState } from "react";
import SignUpStep1 from "./SignUpStep1";
import SignUpStep2 from "./SignUpStep2";
import PreviewProfile from "./PreviewProfile";
import { signUp } from "./authAPI";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../store/authContext";

export default function SignUpFormWrapper() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const next = () => setStep((s) => s + 1);
  const back = () => setStep((s) => s - 1);

  const handleSubmit = async () => {
    try {
      const data = await signUp(formData);
      login(data);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message || "Registration failed");
    }
  };

  return (
    <div className="auth-container">
      {step === 1 && <SignUpStep1 formData={formData} setFormData={setFormData} next={next} />}
      {step === 2 && formData.preferenceChoice === "custom" && (
        <SignUpStep2 formData={formData} setFormData={setFormData} next={next} back={back} />
      )}
      {((step === 2 && formData.preferenceChoice !== "custom") || step === 3) && (
        <PreviewProfile formData={formData} back={back} submit={handleSubmit} error={error} />
      )}
    </div>
  );
}