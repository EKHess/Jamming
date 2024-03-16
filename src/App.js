import './App.css';
import SearchBar from "./components/SearchBar";
import PlaylistForm from "./components/PlaylistForm";
import PlaylistTrack from './components/PlaylistTrack';
import React, { useState, useEffect } from "react";
import TrackResult from './components/TrackResult';
import Spotify from './utilities/Spotify';

function App() {
  const [searchInput, setSearchInput] = useState('');
  const [topTracks, setTopTracks] = useState([]);
  const [userName, setUserName] = useState('');
  const [logged, setLogged] = useState(false);
  const [playlist, setPlaylist] = useState([]);

  useEffect(() => {
    const authenticated = Spotify.checkAuth();
    if (authenticated) {
      Spotify.getUserName()
        .then((fetchedUserName) => {
          setUserName(fetchedUserName);
          setLogged(authenticated);
        })
        .catch((error) => {
          console.error('Error fetching user name:', error);
        });
    } else {
      console.log('Login failed');
    }
  }, [])

  // Search Function
  async function search() {
    Spotify.searchTracks(searchInput)
      .then(returnedTracks => setTopTracks(returnedTracks))
  }

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

  if (!logged) {
    return <button onClick={Spotify.getAuth}>Sign in to Spotify</button>
  } else {
    return (
      <div className="App">
        <h1 className="header-title">Jamming</h1>
        <h2 className='user-name'>Hello, {userName}</h2>
        <div className="search-bar">
          <SearchBar search={search} searchInput={searchInput} setSearchInput={setSearchInput} />
        </div>

        <section className='container'>
          <div>
            <h2>Results</h2>
              <div className="result-tracks">
                {topTracks.map((track) => <TrackResult addTrack={addTrackToPlaylist} trackObject={track} key={track.id}/>)}
              </div>
          </div>
          <div>
            <PlaylistForm />
            <div className="playlist-tracks">
              {playlist.map((track) =><PlaylistTrack trackObject={track} removeTrack={removeTrackFromPlaylist} key={track.id} />)}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
