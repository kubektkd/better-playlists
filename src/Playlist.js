import React, { Component } from 'react';
import './App.css';

class Playlist extends Component {
  render() {
    let imageStyle = {width: '125px', height: '125px', borderRadius: '50%', border: '5px silver solid'};
    let headerStyle = {margin: '10px 0'};
    let listStyle = {margin: '15px 0'};

    let playlist = this.props.playlist;

    return (
      <div className="playlist">
        <img src={playlist.image} alt={playlist.name} style={imageStyle} />
        <h4 style={headerStyle}>{playlist.name}</h4>
        <ul style={listStyle}>
          {playlist.songs.map(song =>
            <li key={Math.random()}>{song.name}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default Playlist;
