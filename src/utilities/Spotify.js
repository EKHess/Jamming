const CLIENT_ID = 'a3c530b21aa84e3aa8da93ed77e04ce2';
const REDIRECT_URI = 'https://localhost:3000/';

let accessToken;
let userID;

// Spotify is a JavaScript object which contains useful methods for interacting with the Spotify API
const Spotify = {
    // Redirect user to Spotify login page when the login button is clicked
    getAuth() {
        const tokenUrl = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&scope=playlist-modify-public&redirect_uri=${REDIRECT_URI}`;
        window.location.href = tokenUrl;
    }
}

export default Spotify;