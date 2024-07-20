import React, { useState } from "react";
import axios from "axios";
import "../index.css";

const LoginForm = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:9000/users/login", { username, password });
      console.log("User logged in:", response.data);

      // Calling parent component callback function with user data
      onLoginSuccess(response.data.user);
    } catch (error) {
      console.error("Login failed:", error.response?.data);
      setError("Invalid username or password");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <p className="error-message">{error}</p>}
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginForm;
