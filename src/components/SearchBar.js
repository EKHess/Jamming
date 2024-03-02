import React from "react";
import "../styles/SearchBar.css"

function SearchBar() {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <form className="search-form">
                <input name="search" type="text" />
                <br />
                <input onClick={handleSubmit} type="submit" value="Search"/>
            </form>
        </>
    )
}

export default SearchBar;