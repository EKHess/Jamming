import React, { useState } from "react";
import "../styles/SearchBar.css"

function SearchBar(props) {
    const handleTextChange = (event) => {
        props.setSearchInput(event.target.value);

        if (event.key == 'Enter') {
            props.search();
        }
    }

    
    const handleSubmit = (e) => {
        e.preventDefault();
        props.search(props.searchInput);
    }

    return (
        <>
            <form className="search-form">
                <input className="search-input" name="search" type="text" onChange={handleTextChange}  value={props.searchInput} placeholder="Search for your favourite artists" />
                <br />
                <input className="submit-btn" onClick={handleSubmit} type="submit" value="Search"/>
            </form>
        </>
    )
}

export default SearchBar;