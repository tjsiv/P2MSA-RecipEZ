import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import Navbar from "./components/Navbar";
import HomeCards from "./components/HomeCards";
import UserProfile from "./components/UserProfile";
import Favorites from "./components/Favorites";
import Login from "./components/Login";

const App = () => {
  const [user, setUser] = useState(null); // State to hold logged-in user data when login in submitted

  const handleLoginSuccess = (userData) => {
    setUser(userData); // Set logged-in user data when logging in
  };

  const handleLogout = () => {
    setUser(null); // Clear logged-in user data when logged out
  };

  return (
    
    <Router>
    <div>
      <Navbar user={user} />
      <Routes>
        <Route path="/" element={<HomeCards />} />
        <Route path="/search" element={<SearchBar onSearch={() => {}} />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route
          path="/login"
          element={<Login onLoginSuccess={handleLoginSuccess} />} // Updated component
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
        <Route path="*" element={<Navigate to="/" />} />
        {/* re-directs to 404 or home */}
      </Routes>
      <Footer />
    </div>
  </Router>
    
    
  );
};

export default App;
