import { toTrackResultObj } from "./utilities";

const CLIENT_ID = 'a3c530b21aa84e3aa8da93ed77e04ce2';

// Make sure to update the Redirect URI on your Spotify Developer Account for your app to this exact link!
// const REDIRECT_URI = 'https://ekhess.github.io/Jamming/';  
const REDIRECT_URI = 'http://localhost:3000/Jamming/';

let accessToken;
let userID;

// Spotify is a JavaScript object which contains useful methods for interacting with the Spotify API
const Spotify = {
    // Redirect user to Spotify login page when the login button is clicked
    getAuth() {
        const tokenUrl = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&scope=playlist-modify-public&redirect_uri=${REDIRECT_URI}`;
        window.location.href = tokenUrl;
    },


    checkAuth() {
        // If /access_token= is in the URL, extract it. If you'd like an explainer, ask ChatGPT to explain the window.location.href.match(/access_token=([^&]*)/) part :-)
        const authenticated = window.location.href.match(/access_token=([^&]*)/);  // Returns array, access_token at index 1
        if (authenticated) {
            accessToken = authenticated[1];
            // console.log(accessToken);
            return true;
        } else {
            return false;
        }
    },

    async getUserName() {
        if(!accessToken) {
            return Promise.reject(new Error('Access token is missing'));
        }
        const nameEndpoint = 'https://api.spotify.com/v1/me';
        return fetch(nameEndpoint, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
            }
        })
        .then((response) => {
            if (response.status === 200) {
                return response.json();
            } else {
                throw new Error('Failed to fetch user data');
             }
        })
        .then((data) => {
            const userName = data.display_name;
            userID = data.id;
            return userName;         
        });
    },

    async searchTracks(searchInput) {
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
        // IMPORTANT NOTE: If you want to return a value from a fetch, you must write "return fetch(...)"
        return fetch('https://api.spotify.com/v1/artists/' + artistID + '/top-tracks', searchParams)
            .then(response => response.json())
            .then((data) => {
            console.log('Returned Data:');
            console.log(data.tracks);
            
            const trackObjs = data.tracks.map((track) => toTrackResultObj(track));
            console.log(trackObjs);

            return trackObjs;
        })
    },

    async createPlaylist(nameOfPlaylistToSave) {
       const createListEndpoint = `https://api.spotify.com/v1/users/${userID}/playlists`;
       const createListParams = {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${accessToken}`, 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: nameOfPlaylistToSave,
                description: 'Playlist created by Jamming, a Web App written by Eric Hess for a Codecademy Project',
                public: true
            })
       }
       return fetch(createListEndpoint, createListParams)
            .then(response => response.json())
            .then(jsonReponse => {return jsonReponse.id})
    },

    async addSongsToPlaylist(playlistID, uriList) {
        const addSongsEndpoint = `https://api.spotify.com/v1/playlists/${playlistID}/tracks`;
        const addSongsParams = {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${accessToken}`, 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                uris: uriList,
                position: 0,
            })
       }

       return fetch(addSongsEndpoint, addSongsParams)
        .then(response => response.json())
        .then(jsonResponse => console.log(jsonResponse))
    },

}

export default Spotify;