import React, { Component } from 'react';
import Header from './Header.js';
import PlaylistCount from './PlaylistCount.js';
import TimeCount from './TimeCount.js';
import './App.css';
import Filter from './Filter.js';
import Playlist from './Playlist.js';

export const fakeServerData = {
  user: {
    name: 'Jim',
    playlists: [
      {
        name: 'My favoutrites',
        songs: [
          {
            name: 'Californication',
            duration: 1234,
          },
          {
            name: 'Iris',
            duration: 1234,
          },
          {
            name: 'Kryptonite',
            duration: 1234,
          },
        ],
      },
      {
        name: 'Last discovers',
        songs: [
          {
            name: 'Unsteady',
            duration: 1430,
          },
          {
            name: 'Far from Home',
            duration: 1350,
          },
          {
            name: 'Unity',
            duration: 1250,
          },
        ],
      },
      {
        name: 'Waiting room',
        songs: [
          {
            name: 'Down Under',
            duration: 1150,
          },
          {
            name: 'Hide and Seek',
            duration: 1230,
          },
          {
            name: 'Set it all free',
            duration: 1350,
          },
        ],
      },
      {
        name: 'Recommended',
        songs: [
          {
            name: 'Simple Song',
            duration: 1250,
          },
          {
            name: 'Wherever I go',
            duration: 1280,
          },
          {
            name: 'Fireflies',
            duration: 1320,
          },
        ],
      },
    ],
  },
};

class App extends Component {
  constructor() {
    super();
    this.state = {serverData: {}};
  }
  
  componentDidMount() {
    setTimeout(() => {
      this.setState({serverData: fakeServerData});
    }, 1000);
  }

  render() {
    return (
      <div className="App">
        {this.state.serverData.user ?
        <div className="content">
          <Header username={this.state.serverData.user.name} />

          <div className="aggregate">
            <PlaylistCount playlists={this.state.serverData.user && this.state.serverData.user.playlists} />
            <TimeCount playlists={this.state.serverData.user && this.state.serverData.user.playlists} />
          </div>

          <Filter />

          <div className="playlists">
            {this.state.serverData.user.playlists.map(playlist => 
              <Playlist name={playlist.name} songs={playlist.songs}/>
            )}
          </div>
        </div> : <div className="loading">Loading <span>...</span></div>}
      </div>
    );
  }
}

export default App;