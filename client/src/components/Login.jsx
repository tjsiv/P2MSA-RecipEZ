import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import "../index.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:9000/users/login", {
        username,
        password,
      });
      console.log("User logged in:", response.data);

      setUser(response.data.user); // Save user to context
      navigate("/"); // Navigate to dashboard or another page
    } catch (error) {
      console.error("Login failed:", error.response?.data);

      if (error.response?.status === 404) {
        setError("User not found. Please register.");
        setIsRegistering(true);
      } else {
        setError("Invalid username or password");
      }
    }
  };

  const handleRegister = async () => {
    try {
      const response = await axios.post("http://localhost:9000/users/register", {
        username,
        email,
        password,
      });
      console.log("User registered:", response.data);

      setIsRegistering(false);
      setError("Registration successful! Please log in.");
    } catch (error) {
      console.error("Registration failed:", error);
      setError("Registration failed. Please try again.");
    }
  };

  return (
    <div className="auth-container">
      {isRegistering ? (
        <div className="register-container">
          <h2>Register</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="error-message">{error}</p>}
          <button onClick={handleRegister}>Register</button>
          <button onClick={() => setIsRegistering(false)}>Back to Login</button>
        </div>
      ) : (
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
          <button className="register-button" onClick={() => setIsRegistering(true)}>Go to Register</button>
        </div>
      )}
    </div>
  );
};

export default Login;
