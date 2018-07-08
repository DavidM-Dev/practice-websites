import React, { Component } from 'react';
import './Header.css';
import anime from 'animejs';
import hamburger_icon from './images/hamburger_icon.png';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="section1"/>
        <div className="section2"/>
        <div className="section3"/>
        <div className="section4"/>
        <div className="section5"/>
        <p className="title">Title</p>
        <a onClick={() => this.props.instance.toggleNavbar()}>
          <div className="sidebar-button">
            <img src={hamburger_icon} alt="" className="hamburger-icon"/>
          </div>
        </a>
      </div>
    );
  }

  componentDidMount() {
    anime({
      targets: '.title',
      translateY: [-100,0],
      delay: 500
    });
  }

}

export default Header;
