import React, { useState } from "react";
import axios from "axios";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const response = await axios.post("http://localhost:9000/users/register", { username, email, password });
      console.log("User registered:", response.data);
      // Optionally handle success (e.g., redirect to login page)
    } catch (error) {
      console.error("Registration failed:", error);
      // Handle error (e.g., show error message to user)
    }
  };

  return (
    <div className="register-container">
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
      <button className="register-button" onClick={handleRegister}>Register</button>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  inputButtonContainer: {
    display: "flex",
    alignItems: "center",
    marginBottom: "16px",
  },
  input: {
    padding: "8px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    marginRight: "8px",
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
  resultsContainer: {
    marginTop: "16px",
    width: "100%",
    textAlign: "center",
  },
  resultItem: {
    padding: "8px",
    borderBottom: "1px solid #ccc",
  },
  loading: {
    padding: "8px",
    color: "#007bff",
  },
  error: {
    padding: "8px",
    color: "red",
  },
  noResults: {
    padding: "8px",
    color: "#999",
  },
};
export default RegisterForm;
