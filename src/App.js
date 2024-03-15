import './App.css';
import SearchBar from "./components/SearchBar";
import PlaylistForm from "./components/PlaylistForm";
import PlaylistTrack from './components/PlaylistTrack';
import React, { useState, useEffect } from "react";
import tracks from './SongsData';
import TrackResult from './components/TrackResult';
import { toTrackResultObj } from './utilities/utilities';

// Information for Spotify API
const CLIENT_ID = 'a3c530b21aa84e3aa8da93ed77e04ce2';
const CLIENT_SECRET = '5c54528389a9445e8fa2a29323c1de52';

// let topTracks = [];

function App() {
  const [accessToken, setAccessToken] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [topTracks, setTopTracks] = useState([]);
  

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


  // SEARCH FEATURE
  // Search Function
  async function search() {
    // console.log(props.accessToken);
    console.log("Searching for " + searchInput);

    // Get request using the SearchBar to get the ID of the artist we've searched for
    const searchParams = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + accessToken
        },

    }

    console.log('Aquiring artist ID...');
    let artistID = await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=artist', searchParams)
        .then(response => response.json())
        .then(data => { 
            return data.artists.items[0].id;
        })

    console.log('Artist ID: ' + artistID);
    
    console.log('Querying Spotify API...');
    // Get request with Artist ID to return top tracks by that artist
    let returnedTracks = await fetch('https://api.spotify.com/v1/artists/' + artistID + '/top-tracks', searchParams)
        .then(response => response.json())
        .then(data => {
          console.log('Returned Data:');
          console.log(data.tracks);

          // Set the state of topTracks to the array formatted just like our mock data
          console.log('Setting state and mapping data to desired format...')
          setTopTracks(data.tracks.map((track) => toTrackResultObj(track)));
          
          console.log('Search complete successfully');
        })

    
    



  }


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

export default App;
