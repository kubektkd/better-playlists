import React, { Component } from 'react';
import './App.css';

class TimeCount extends Component {
  render() {
    const allSongs = this.props.playlists;
    let totalTime = 0;
    allSongs.forEach(element => {
      element.songs.forEach(el => {
        totalTime += el.duration;
      });
    });
    return (
      <div>
        <h3>{Math.floor(totalTime/360)} <span>hours</span></h3>
      </div>
    );
  }
}

export default TimeCount;
