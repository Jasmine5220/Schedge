import React from "react";
import AppRoutes from "./routes/AppRoutes";
import { AuthProvider } from "./store/authContext";
import "./styles/global.css";

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;
