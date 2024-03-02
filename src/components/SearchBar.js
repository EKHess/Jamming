import React from "react";

function SearchBar() {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <form>
                <input name="search" type="text" />
                <br />
                <input onClick={handleSubmit} type="submit" value="Search"/>
            </form>
        </>
    )
}

export default SearchBar;