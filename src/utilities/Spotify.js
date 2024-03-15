const CLIENT_ID = 'a3c530b21aa84e3aa8da93ed77e04ce2';
const REDIRECT_URI = 'http://localhost:3000/';

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
            return true;
        } else {
            return false;
        }
    },

    async getUserName() {
        if (!accessToken) {
            return Promise.reject(new Error('Access token is missing'));
        }

        const nameEndpoint = 'https://api.spotify.com/v1/me';
        const nameParams = {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        }
        userID = await fetch(nameEndpoint, nameParams)
            .then(response => {
                if (response.status === 200) {
                    return response.json();
                } else {
                    throw new Error('Failed to fetch user data')
                }
            })
            .then(jsonResponse => {
                const userName = jsonResponse.display_name;
                userID = jsonResponse.id;
                return userName;
            })
    },

    


}

export default Spotify;