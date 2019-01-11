import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './NavComponent.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <script type="text/javascript" src="main.js"></script>
          <Nav />
        </header>
      </div>
    );
  }
}

export default App;
