import React from "react";
import '../styles/Track.css';
import AddOrRemoveButton from "./AddOrRemoveButton";

function PlaylistTrack({trackObject, removeTrack}) {


    return (
        <div className="track-container">  
            <div>
                <h3>{trackObject.title}</h3>
                <p>{trackObject.artist} | {trackObject.album}</p>
            </div>
            <RemoveButton />
        </div>
    )
}

export default PlaylistTrack;