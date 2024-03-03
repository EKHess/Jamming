import React from "react";
import Track from "./TrackResult";
import '../styles/Playlist.css';


function Playlist({addTrack}) {
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

export default Playlist;