import React from "react";
import Track from "./Track";
import '../styles/TrackList.css'

function TrackList({tracks}) {
    return (
        <div className="result-tracks">
            {tracks.map((track) => <Track artist={track.artist} title={track.title} />)}
        </div>
    )
}

export default TrackList;