import React, { Component } from 'react';
import './App.css';

class Playlist extends Component {
  render() {
    let imageStyle = {width: '100px', height: '100px', borderRadius: '50%'};
    let headerStyle = {margin: '10px 0'};
    let listStyle = {margin: '15px 0'};

    return (
      <div className="playlist">
        <img src="http://placeimg.com/300/300/nature" alt="" style={imageStyle} />
        <h4 style={headerStyle}>Playlist's name</h4>
        <ul style={listStyle}>
          <li>Song #1</li>
          <li>Song #2</li>
          <li>Song #3</li>
        </ul>
      </div>
    );
  }
}

export default Playlist;