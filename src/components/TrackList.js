import React from "react";
import TrackResult from "./TrackResult";
import '../styles/TrackList.css'

function TrackList({tracksArr}) {
    return (
        <div className="result-tracks">
            {tracksArr.map((track) => <TrackResult trackObject={track}/>)}
        </div>
    )
}

export default TrackList;