import React, { Component } from 'react';
import './App.css';

class PlaylistCount extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.playlists.length} <span>playlists</span></h3>
      </div>
    );
  }
}

export default PlaylistCount;
