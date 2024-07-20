import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../index.css";

const LoginForm = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:9000/users/login", {
        username,
        password,
      });
      console.log("User logged in:", response.data);

      // Calling parent component callback function with user data
      onLoginSuccess(response.data.user);
    } catch (error) {
      console.error("Login failed:", error.response?.data);

      if (error.response?.status === 404) {
        setError("User not found. Redirecting to registration...");
        setTimeout(() => {
          navigate("/register");
        }, 2000); // Waiting for 2 seconds before redirecting
      } else {
        setError("Invalid username or password");
      }
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
