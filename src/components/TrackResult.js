import React from "react";
import '../styles/Track.css';
import AddButton from "./AddButton";

function TrackResult({trackObject, removeTrack}) {


    return (
        <div className="track-container">  
            <div>
                <h3>{trackObject.title}</h3>
                <p>{trackObject.artist} | {trackObject.album}</p>
            </div>
            <AddButton />
        </div>
    )
}

export default TrackResult;