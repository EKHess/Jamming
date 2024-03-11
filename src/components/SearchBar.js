import React, { useState } from "react";
import "../styles/SearchBar.css"

function SearchBar(props) {

    const [searchInput, setSearchInput] = useState('');

    const handleTextChange = (event) => {
        setSearchInput(event.target.value);
    }

    // Search Function
    async function search() {
        // console.log(props.accessToken);
        console.log("Searching for " + searchInput);

        // Get request using the SearchBar to get the ID of the artist we've searched for
        const searchParams = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + props.accessToken
            },

        }
        let artistID = await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=artist', searchParams)
            .then(response => response.json())
            .then(data => { 
                return data.artists.items[0].id;
            })

        // console.log(artistID);
        
        let topTracks = await fetch('https://api.spotify.com/v1/artists/' + artistID + '/top-tracks', searchParams)
            .then(response => response.json())
            .then(data => console.log(data))

        // Get request with Artist ID to return all the songs by that artist

        // Display those songs to the user
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        search();
    }

    return (
        <>
            <form className="search-form">
                <input name="search" type="text" onChange={handleTextChange} value={searchInput} />
                <br />
                <input onClick={handleSubmit} type="submit" value="Search"/>
            </form>
        </>
    )
}

export default SearchBar;