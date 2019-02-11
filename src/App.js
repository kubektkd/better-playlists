import React, { Component } from 'react';
import Header from './Header.js';
import Aggregate from './Aggregate.js';
import './App.css';
import Filter from './Filter.js';
import Playlist from './Playlist.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <div className="aggregate">
          <Aggregate />
          <Aggregate />
        </div>

        <Filter />

        <div className="playlists">
          <Playlist />
          <Playlist />
          <Playlist />
          <Playlist />
        </div>
      </div>
    );
  }
}

export default App;
