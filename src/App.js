import React, { Component } from 'react';
import './App.css';
import Nav from './NavComponent.js';
import { CookiesProvider } from 'react-cookie';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
      username: ""
    };
  }

  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }

  render() {

    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated,
      username: this.state.username
    }

    return (
      <CookiesProvider>
        <div className="App">
          <header className="App-header">
            <script type="text/javascript" src="main.js"></script>
            <Nav childProps={childProps} />
          </header>
        </div>
      </CookiesProvider>
    );
  }
}

export default App;
