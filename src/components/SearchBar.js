import React, { useState } from "react";
import "../styles/SearchBar.css"

function SearchBar() {

    const [searchInput, setSearchInput] = useState('');

    const handleTextChange = (event) => {
        setSearchInput(event.target.value);
    }

    // Search Function
    async function search() {
        console.log("Searching for " + searchInput);

        // Get request using the SearchBar to get the ID of the artist we've searched for
        // const artistID = await fetch('https://api.spotify.com/v1/artists/')

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