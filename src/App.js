import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import PlaylistCount from './PlaylistCount.js';
import TimeCount from './TimeCount.js';
import Filter from './Filter.js';
import Playlist from './Playlist.js';
import {debounce} from 'lodash';

export const fakeServerData = {
  user: {
    name: 'Jim',
    playlists: [
      {
        id: 1,
        name: 'My favoutrites',
        image: 'http://placeimg.com/300/300/animals',
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
        id: 2,
        name: 'Last discovers',
        image: 'http://placeimg.com/300/300/nature',
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
        id: 3,
        name: 'Waiting room',
        image: 'http://placeimg.com/300/300/people',
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
        id: 4,
        name: 'Recommended',
        image: 'http://placeimg.com/300/300/tech',
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
    this.state = {
      serverData: {},
      filterString: ''
    };
  }
  
  componentDidMount() {
    setTimeout(() => {
      this.setState({serverData: fakeServerData});
    }, 1500);
  }

  render() {
    let playlistsToRender = this.state.serverData.user && this.state.serverData.user.playlists.filter(playlist =>
      playlist.name.toLowerCase().includes(this.state.filterString.toLowerCase())
    )

    return (
      <div className="App">
        {this.state.serverData.user ?
        <div className="content">
          <Header username={this.state.serverData.user.name} />

          <div className="aggregate">
            <PlaylistCount playlists={playlistsToRender} />
            <TimeCount playlists={playlistsToRender} />
          </div>

          <Filter onTextChange={debounce(text => this.setState({filterString: text}), 500)} />

          <div className="playlists">
            {playlistsToRender.map(playlist => 
              <Playlist key={playlist.id} playlist={playlist}/>
            )}
          </div>
        </div> : <div className="loading">Loading <span>...</span></div>}
      </div>
    );
  }
}

export default App;