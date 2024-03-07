import React from "react";
import TrackResult from "./TrackResult";
import '../styles/TrackList.css'

function TrackList({tracksArr, addTrack}) {
    return (
        <div className="result-tracks">
            {tracksArr.map((track) => <TrackResult addTrack={addTrack} trackObject={track}/>)}
        </div>
    )
}

export default TrackList;