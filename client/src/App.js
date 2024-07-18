import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import Navbar from "./components/Navbar";
import HomeCards from "./components/HomeCards";


const App = () => {
  const handleSearch = (query) => {
  };
  //***************************************************************************************************************************************************************** */
  // const [user, setUser] = useState(null); // State to hold logged-in user data

  // const handleLoginSuccess = (userData) => {
  //   setUser(userData); // Set logged-in user data
  // };

  // const handleLogout = () => {
  //   setUser(null); // Clear logged-in user data (logout functionality)                                               this is for  login checking
  // };
  //
  // return(
  // <div>
  //     {!user ? (
  //       <LoginForm onLoginSuccess={handleLoginSuccess} />
  //     ) : (
  //       <UserProfile user={user} onLogout={handleLogout} />
  //     )}
  //   </div>
  // );
  //*************************************************************************************************************************************************************** */
  // constructor(props) {
  //   super(props);
  //   this.state = { apiResponse: "" };
  // }

  // callAPI() {
  //   fetch("http://localhost:9000/testAPI")
  //     .then(res => res.text())
  //     .then(res => this.setState({ apiResponse: res }));
  // }

  // componentDidMount() {
  //   this.callAPI();
  // }

  // render() {

        

  return (
    <Router>
      <div>
        <Navbar />
        <HomeCards/>
        <Routes>
          {/* Home Route */}
          <Route path="/" element="" />
          {/* Search Route */}
          <Route
            path="/search"
            element={<SearchBar onSearch={handleSearch} />}
          />
          {/* Favorites Route */}
          <Route path="/favorites" element="" />
          {/* Categories Route */}
          <Route path="/categories" element="" />
          {/* Feeling Lucky Route */}
          <Route path="/feeling-lucky" element="" />
          {/* Login Route */}
          <Route path="/user" element="" />
          {/* Recipe Details Route */}

        </Routes>
         main

        <Footer />
      </div>
    </Router>
  );
};
// }

export default App;
