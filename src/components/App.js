/**
 * App.js
 * This is the "main" component, invoked by the src/index.js
 * It renders the header, a (very) small intro text, and
 * invokes the BikesContainer, which in its turns calls 
 * the necessary presentational components.
 */

import React from 'react';
import logo from '../media/logo.svg';
import '../styles/App.css'
import BikesContainer from '../containers/BikesContainer';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome fellow Biker!</h1>
        </header>
        <p>
          Here is a list of the bikes we have available:
        </p>
        <BikesContainer />
      </div>
    );
  }
}

export default App;
