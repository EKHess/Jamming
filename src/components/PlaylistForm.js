import React, { useState } from "react";
import '../styles/reset.css';
import '../styles/PlaylistForm.css';


function PlaylistForm(props) {
    
    const handleChange = (event) => {
        props.setPlaylistTitle(event.target.value);
        // console.log(props.playlistTitle);
    }

    const handleClick = (event) => {
        event.preventDefault();
        props.savePlaylist();
    }

    return (
        <>
            <h2 className="result-header">Create A Playlist</h2>
            <form>
                <div className="playlist-title">
                    <input className="form-input" name="playlistName" type="text" onChange={handleChange} value={props.playlistTitle} placeholder="Give your playlist a title" />
                    <br />
                    <input className="save-btn" type="submit" value="Save to Spotify" onClick={handleClick}/>
                </div>
            </form>
        </>
    )
}

export default PlaylistForm;