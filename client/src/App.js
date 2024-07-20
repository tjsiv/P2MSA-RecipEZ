import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import Navbar from "./components/Navbar";
import HomeCards from "./components/HomeCards";
import UserProfile from "./components/UserProfile";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";

const App = () => {
  const [user, setUser] = useState(null);

  const handleLoginSuccess = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeCards />} />
          <Route path="/search" element={<SearchBar />} />
          <Route path="/favorites" element="" />
          <Route path="/categories" element="" />
          <Route path="/feeling-lucky" element="" />
          <Route path="/register" element={<RegisterForm />} />
          <Route
            path="/login"
            element={<LoginForm onLoginSuccess={handleLoginSuccess} />}
          />
          <Route
            path="/user"
            element={
              user ? (
                <UserProfile user={user} onLogout={handleLogout} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
