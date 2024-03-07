import React from "react";
import '../styles/Track.css';
import AddOrRemoveButton from "./AddOrRemoveButton";

function PlaylistTrack({trackObject, removeTrack}) {

    const handleRemove = (event) => {
        removeTrack(trackObject.id);
    };

    return (
        <div className="track-container">  
            <div>
                <h3>{trackObject.title}</h3>
                <p>{trackObject.artist} | {trackObject.album}</p>
            </div>
            <button onClick={handleRemove}>Rem</button>
        </div>
    )
}

export default PlaylistTrack;