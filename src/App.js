import './styles/reset.css'
import './App.css';
import SearchBar from "./components/SearchBar";
import PlaylistForm from "./components/PlaylistForm";
import PlaylistTrack from './components/PlaylistTrack';
import React, { useState, useEffect } from "react";
import TrackResult from './components/TrackResult';
import Spotify from './utilities/Spotify';

const spotifyTimeout = 3600; // seconds

function App() {
  const [searchInput, setSearchInput] = useState('');
  const [topTracks, setTopTracks] = useState([]);
  const [userName, setUserName] = useState('');
  const [logged, setLogged] = useState(false);
  const [playlist, setPlaylist] = useState([]);
  const [playlistTitle, setPlaylistTitle] = useState('');

  // This side effect checks authentication of the user using Spotify's login page on App's first render
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

  // This side effect times out the window after 1 hour, the duration for which a Spotify access token is valid
  useEffect(() => {
    setTimeout(() => {
      // alert('Session has expired. Please refresh the page.');
      if (window.confirm('Session has timed out. Please press OK to return to the login page.')) {
        window.location.href = 'http://localhost:3000/';
      } else {
        return;
      }
    }, spotifyTimeout * 1000);
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

  const savePlaylist = () => {
    if (playlist.length === 0) {
      return;
    } else {
      const urisArray = playlist.map(track => track.uri);
      console.log('Tracks to be added to user\'s playlist:');
      console.log(urisArray);
      console.log(`Playlist title from input: ${playlistTitle}`)
      Spotify.createPlaylist(playlistTitle)
        .then(playlistID => Spotify.addSongsToPlaylist(playlistID, urisArray))

      // Clear playlist entries once playlist has been sent to Spotify
      setPlaylist([]);
      setTopTracks([]);
      setSearchInput('');
      setPlaylistTitle('');
    }
  }



  if (!logged) {
    return (
      <div className='login-page-container'>
        <div className='nav-container'>
          <nav className='nav-section'>
            <div className='header-info'>
              <p className='app-name-header'>Ja<span className='accent-text'>mm</span>ing</p>
              <p className='author-name'>by Eric Hess</p>
            </div>
            <ul>
              <li><a href='https://github.com/EKHess' target='_blank'><span className='login-icon'><ion-icon name="logo-github"></ion-icon></span></a></li>
              <li><a href='https://www.linkedin.com/in/ehess51/' target='_blank'><span className='login-icon'><ion-icon name="logo-linkedin"></ion-icon></span></a></li>
              <li><a href='https://www.instagram.com/erichessonline/' target='_blank'><span className='login-icon'><ion-icon name="logo-instagram"></ion-icon></span></a></li>
              <li><a href='https://twitter.com/EricHessOnline' target='_blank'><span className='login-icon'><ion-icon name="logo-twitter"></ion-icon></span></a></li>
            </ul>
          </nav>
        </div>
        <div className='login-container'>
          <div className='content-container'>
            <h1 className='app-name'>Ja<span className='accent-text'>mm</span>ing</h1>
            <h2 className='app-description'>A web app to create playlists on Spotify</h2>
            <div className='button-container'>
              <button className='sign-in-btn' onClick={Spotify.getAuth}>Sign in to Spotify</button>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="App">
        <section className='app-header-content'>
          <h1 className='app-name-header' id='header-title'>Ja<span className='accent-text'>mm</span>ing</h1>
          <h2 className='user-name-msg'>Hello, <span className='user-name'>{userName}</span></h2>
          <div className="search-bar">
            <SearchBar search={search} searchInput={searchInput} setSearchInput={setSearchInput} />
          </div>
        </section>

        <section className='container'>
          <div>
            <h2 className='result-header'>Results</h2>
              <div className="result-tracks scrollable">
                {topTracks.map((track) => <TrackResult addTrack={addTrackToPlaylist} trackObject={track} key={track.id}/>)}
              </div>
          </div>
          <div>
            <PlaylistForm savePlaylist={savePlaylist} playlistTitle={playlistTitle} setPlaylistTitle={setPlaylistTitle} />
            <div className="playlist-tracks scrollable">
              {playlist.map((track) =><PlaylistTrack trackObject={track} removeTrack={removeTrackFromPlaylist} key={track.id} />)}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
