import React, { Component } from 'react';
import './Navbar.css';
import close_icon from './images/close-icon.png';
import facebook_icon from './images/facebook.png';
import twitter_icon from './images/twitter.png';
import instagram_icon from './images/instagram.png';

class Navbar extends Component {

  render() {
      return(
        <div className="bar">
          <p className="title">Title</p>
          <a className="close-button" onClick={() => this.props.instance.toggleNavbar()}>
            <img src={close_icon} className="close-icon" alt=""/>
          </a>
          <hr className="divide"/>
          <a href="./" className="link">Link A</a>
          <hr className="divide"/>
          <a href="./" className="link">Link B</a>
          <hr className="divide"/>
          <a href="./" className="link">Link C</a>
          <hr className="divide"/>
          <a href="./" className="link">Link D</a>
          <hr className="divide"/>
          <a href="./" className="link">Link E</a>
          <hr className="divide"/>
          <a href="./" className="link">Link F</a>
          <div className="icons">
            <a href="./"><img src={facebook_icon} className="icon" alt=""/></a>
            <a href="./"><img src={twitter_icon} className="icon" alt=""/></a>
            <a href="./"><img src={instagram_icon} className="icon" alt=""/></a>
          </div>
        </div>
      );
  }
}

export default Navbar;
