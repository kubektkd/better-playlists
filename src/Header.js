import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';

class Header extends Component {
  render() {
    let titleHeaderStyle = {display: 'inline-block'};
    let logoStyle = {position: 'relative', top: '15px'};
    let name = 'Jim';

    return (
      <header className="header">
        <img src={logo} className="App-logo" alt="logo" style={logoStyle} />
        <h1 style={titleHeaderStyle}>{name}'s Playlists</h1>
      </header>
    );
  }
}

export default Header;
