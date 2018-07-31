import React, { Component } from 'react';
import logo from '../media/logo.svg';
import '../styles/App.css'
import Bikes from './Bikes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p className="New-tag">
          Everything is displaying fine!
        </p>
        <p>
          Here are the bikes:
        </p>
        <Bikes />
      </div>
    );
  }
}

export default App;
