import React, { Component } from 'react';
import Footer from './components/Footer';

class App extends Component {
 

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

  render() {
    return (
      <div>
        <header>
          <p>
            {/* {this.state.apiResponse} */}
          </p>
          <Footer />
        </header>
      </div>
    );
  }
}
  
export default App;