import React from "react";
import '../styles/PlaylistForm.css';


function PlaylistForm() {
    return (
        <>
            <form>
                <div className="playlist-title">
                    <input name="playlistName" type="text" />
                    <br />
                    <input type="submit" value="Save to Spotify"/>
                </div>
            </form>
        </>
    )
}

export default PlaylistForm;