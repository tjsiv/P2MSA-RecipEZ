import React, { Component } from 'react';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';

const App = () => {
  const handleSearch = (query) => {
    console.log('Searching for:', query);
    // Perform search or API call here
  };

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
          <p>
            {/* {this.state.apiResponse} */}
          </p>
          <SearchBar />
          <Footer />
        </header>
      </div>
    );
  }
// }
  
export default App;