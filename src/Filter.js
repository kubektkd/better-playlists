import React, { Component } from 'react';
import './App.css';

class Filter extends Component {
  render() {
    let searchStyle = {width: '35px', height: '35px', margin: '0 20px', filter: 'grayscale(1) invert(1)'};
    let inputStyle = {fontSize: '20px', height: '35px', border: 'none', borderRadius: '10px', color: '#282c34', padding: '0 10px'};
    return (
      <div className="filter">
        <img src="https://static.thenounproject.com/png/101791-200.png" alt="search" style={searchStyle} />
        <input type="text" style={inputStyle} placeholder="Search..." />
      </div>
    );
  }
}

export default Filter;
