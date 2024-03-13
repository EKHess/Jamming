import React from "react";
import '../styles/Track.css'

function PlaylistTrack({trackObject, removeTrack}) {

    const handleRemove = (event) => {
        removeTrack(trackObject.id);
    };

    return (
        <div className="track-container">  
            <div className="text-and-image-container">
                <img src={trackObject.img} className="album-img"/>
                <div>
                    <h3>{trackObject.title}</h3>
                    <p>{trackObject.artist} | {trackObject.album}</p>
                </div>
            </div>
            
            <button onClick={handleRemove}>-</button>
        </div>
    )
}

export default PlaylistTrack;