import React from "react";
import Track from "./Track";
import '../styles/Playlist.css';


function Playlist() {
    return (
        <>
            <form>
                <div className="playlist-title">
                    <input name="playlistName" type="text" />
                    <br />
                    <input type="submit" value="Save to Spotify"/>
                </div>

                {/* <div>
                    {tracks.map((track) => <Track artist={track.artist} title={track.title} />)}
                </div> */}
            </form>
        </>
    )
}

export default Playlist;