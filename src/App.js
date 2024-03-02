import './App.css';
import SearchBar from "./components/SearchBar";
import TrackList from "./components/TrackList";
import Playlist from "./components/Playlist";
import React, { useState } from "react";
import tracks from './SongsData';

function App() {

  // Setup state for playlist, which will be updated as user interacts with App
  const [playlist, setPlaylist] = useState([]);

  return (
    <div className="App">
      <h1 className="header-title">Jamming</h1>
      <div className="search-bar">
        <SearchBar />
      </div>

      <section className='container'>
        <div>
          <h2>Results</h2>
          <TrackList tracksArr={tracks} />
        </div>
        <div>
          <Playlist />
        </div>
      </section>
    </div>
  );
}

export default App;
