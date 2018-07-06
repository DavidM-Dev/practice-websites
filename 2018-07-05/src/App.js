import React, { Component } from 'react';
import logo from './logo.svg';
import background1 from './images/background-1.png';
import background2 from './images/background-2.png';
import img1 from './images/img-1.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My First Website</h1>
          <a href="./"><button className="button text">ABC</button></a>
          <a href="./"><button className="button text">DEF</button></a>
          <a href="./"><button className="button text">GHI</button></a>
          <a href="./"><button className="button text">JKL</button></a>
          <a href="./"><button className="button text">MNO</button></a>
        </header>
        <div className="container">
          <img src={background1} className="background1" />
          <div className="card center flexy">
            <p className="text one">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lacus ex, congue in malesuada ut, accumsan at quam. Duis id sodales lacus, consequat fermentum mauris. Quisque sollicitudin est a neque placerat, quis accumsan sapien sollicitudin. Duis varius tempor orci ut commodo. In in augue porttitor quam porttitor rhoncus. Praesent aliquet nulla non sem ultrices, et aliquet lacus bibendum. Pellentesque venenatis vitae dolor non gravida. Cras hendrerit tincidunt dolor, sed ultrices dolor consectetur vel. Quisque aliquet venenatis viverra. Sed et leo leo. Duis in augue a quam mollis lobortis. Aenean non est et erat semper tincidunt nec et tortor. Pellentesque tempus magna id consectetur aliquet. Aenean euismod, enim ultricies blandit interdum, est dolor rhoncus erat, ut consequat nisl neque in dolor. Maecenas neque metus, congue non eleifend id, elementum nec diam.
            </p>
            <img src={img1} className="img1" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
