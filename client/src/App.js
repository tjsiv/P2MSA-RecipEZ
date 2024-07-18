import React, { Component } from "react";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import Navbar from "./components/Navbar";
import RecipeCard from "./components/RecipeCard";


const App = () => {
  const handleSearch = (query) => {
    console.log("Searching for:", query);
    // Perform search or API call here
    // www.themealdb.com/api/json/v1/1/search.php?s=
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
    <div>
      <header>        
        
        <Navbar />
        <SearchBar onSearch={handleSearch} />        
        <Footer />
      </header>
    </div>
  );
}; 
// }


export default App;
