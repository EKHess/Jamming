import React from "react";
import '../styles/Track.css';
import AddButton from "./AddButton";

function TrackResult({trackObject, addTrack}) {

    const handleAdd = (event) => {
        const newTrack = {
            title: trackObject.title,
            artist: trackObject.artist,
            album: trackObject.album,
            id: trackObject.id,
        };

        addTrack(newTrack);
    };

    return (
        <div className="track-container">  
            <div>
                <h3>{trackObject.title}</h3>
                <p>{trackObject.artist} | {trackObject.album}</p>
            </div>
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}

export default TrackResult;