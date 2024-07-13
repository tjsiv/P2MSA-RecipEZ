import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
 

  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("http://localhost:9000/testAPI")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }));
  }

  componentDidMount() {
    this.callAPI();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="App">
            {this.state.apiResponse}
          </p>
          <p>test</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
 //client commit test
  
  console.log(8-9);
  console.log(018-015);
  console.log("hello world")
export default App;
