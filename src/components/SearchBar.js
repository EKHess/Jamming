import React, { useState } from "react";
import "../styles/SearchBar.css"

function SearchBar(props) {
    const handleTextChange = (event) => {
        props.setSearchInput(event.target.value);
    }

    
    const handleSubmit = (e) => {
        e.preventDefault();
        props.search();
    }

    return (
        <>
            <form className="search-form">
                <input name="search" type="text" onChange={handleTextChange} value={props.searchInput} />
                <br />
                <input onClick={handleSubmit} type="submit" value="Search"/>
            </form>
        </>
    )
}

export default SearchBar;