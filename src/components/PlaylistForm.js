import React, { useState } from "react";
import '../styles/PlaylistForm.css';


function PlaylistForm(props) {
    
    const handleChange = (event) => {
        props.setPlaylistTitle(event.target.value);
        console.log(props.playlistTitle);
    }

    const handleClick = (event) => {
        event.preventDefault();
        props.savePlaylist();
    }

    return (
        <>
            <form>
                <div className="playlist-title">
                    <input name="playlistName" type="text" onChange={handleChange} value={props.playlistTitle} />
                    <br />
                    <input type="submit" value="Save to Spotify" onClick={handleClick}/>
                    <p>{props.playlistTitle}</p>
                </div>
            </form>
        </>
    )
}

export default PlaylistForm;