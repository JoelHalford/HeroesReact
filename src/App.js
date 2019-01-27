import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './NavComponent.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false
    };
  }

  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }

  render() {

    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    }

    return (
      <div className="App">
        <header className="App-header">
          <script type="text/javascript" src="main.js"></script>
          <Nav childProps={childProps} />
        </header>
      </div>
    );
  }
}

export default App;
