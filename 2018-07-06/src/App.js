import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import Navbar from './Navbar.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header instance={this}/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div></div>
      </div>
    );
  }

  openNavbar() {
    alert('opening navbar');
  }
}

export default App;
