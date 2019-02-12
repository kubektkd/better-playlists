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
    let totalHours = Math.floor(totalTime/360)

    return (
      <div>
        <h3>{totalHours} <span>{totalHours < 2 ? 'hour' : 'hours'}</span></h3>
      </div>
    );
  }
}

export default TimeCount;
