import './App.css';
import SearchBar from "./components/SearchBar";
import PlaylistForm from "./components/PlaylistForm";
import Track from "./components/TrackResult";
import React, { useState } from "react";
import tracks from './SongsData';
import TrackResult from './components/TrackResult';


function App() {

  // Setup state for playlist, which will be updated as user interacts with App
  const [playlist, setPlaylist] = useState([]);

  const addTrackToPlaylist = (trackObj) => {
    setPlaylist((prevPlaylist) => [...prevPlaylist, trackObj]);
  }

  const removeTrackFromPlaylist = (trackObjIdToRemove) => {
    setPlaylist((prevPlaylist) => prevPlaylist.filter((trackObj) => trackObj.id !== trackObjIdToRemove));
  }

  return (
    <div className="App">
      <h1 className="header-title">Jamming</h1>
      <div className="search-bar">
        <SearchBar />
      </div>

      <section className='container'>
        <div>
          <h2>Results</h2>
            <div className="result-tracks">
              {tracks.map((track) => <TrackResult addTrack={addTrackToPlaylist} trackObject={track}/>)}
            </div>
        </div>
        <div>
          <PlaylistForm />
          <ul>
            {playlist.map((track) => <li><Track key={track.id} removeTrack={removeTrackFromPlaylist} /></li>)}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default App;
