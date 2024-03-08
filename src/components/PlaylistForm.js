import React, { useState } from "react";
import '../styles/PlaylistForm.css';


function PlaylistForm() {
    const [playlistTitle, setPlaylistTitle] = useState('');
    const handleChange = (event) => {
        setPlaylistTitle(event.target.value);
    }

    return (
        <>
            <form>
                <div className="playlist-title">
                    <input name="playlistName" type="text" onChange={handleChange} value={playlistTitle} />
                    <br />
                    <input type="submit" value="Save to Spotify"/>
                </div>
            </form>
        </>
    )
}

export default PlaylistForm;