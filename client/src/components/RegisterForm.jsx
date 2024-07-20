import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const response = await axios.post("http://localhost:9000/users/register", { username, email, password });
      console.log("User registered:", response.data);
      // Redirect to login page upon successful registration
      navigate("/login");
    } catch (error) {
      console.error("Registration failed:", error);
      setError("Registration failed. Please try again.");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Username"
        style={styles.input}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        style={styles.input}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        style={styles.input}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <p style={styles.error}>{error}</p>}
      <button style={styles.button} onClick={handleRegister}>Register</button>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  input: {
    padding: "8px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    marginBottom: "16px",
    color: "black",
  },
  button: {
    padding: "8px 16px",
    fontSize: "16px",
    border: "none",
    borderRadius: "4px",
    backgroundColor: "rgb(192, 132, 252)",
    color: "white",
    cursor: "pointer",
  },
  error: {
    padding: "8px",
    color: "red",
  },
};

export default RegisterForm;
