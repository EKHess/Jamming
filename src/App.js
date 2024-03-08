import './App.css';
import SearchBar from "./components/SearchBar";
import PlaylistForm from "./components/PlaylistForm";
import PlaylistTrack from './components/PlaylistTrack';
import React, { useState, useEffect } from "react";
import tracks from './SongsData';
import TrackResult from './components/TrackResult';

// Information for Spotify API
const CLIENT_ID = 'a3c530b21aa84e3aa8da93ed77e04ce2';
const CLIENT_SECRET = '5c54528389a9445e8fa2a29323c1de52';

function App() {
  const [accessToken, setAccessToken] = useState('');

  // GET USER'S ACCESS TOKEN 
  // The following code only runs the first time App renders.
  // The following is a translation of the cURL code provided in the Spotify API Documentation
  // here: https://developer.spotify.com/documentation/web-api/tutorials/getting-started
  useEffect(() => {
    // API Access Token
    const fetchParams = {
      method: 'POST',
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: "grant_type=client_credentials&client_id=" + CLIENT_ID + "&client_secret=" + CLIENT_SECRET,
    }
    fetch('https://accounts.spotify.com/api/token', fetchParams)
      .then(result => result.json())
      .then(data => setAccessToken(data.access_token))
  }, [])

  // Setup state for playlist, which will be updated as user interacts with App
  const [playlist, setPlaylist] = useState([]);

  const addTrackToPlaylist = (trackObj) => {
    // To prevent duplicates from being added to our playlist, check each item in the playlist to ensure that trackObj.id does not match any id's of tracks currently in our playlist 
    let trackObjAlreadyExists = false;
    playlist.forEach((track) => trackObj.id === track.id ? trackObjAlreadyExists = true : trackObjAlreadyExists);

    if (!trackObjAlreadyExists) {
      setPlaylist((prevPlaylist) => [...prevPlaylist, trackObj]);
    }
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
          <div className="playlist-tracks">
            {playlist.map((track) =><PlaylistTrack trackObject={track} removeTrack={removeTrackFromPlaylist} />)}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
