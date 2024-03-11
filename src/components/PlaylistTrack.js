import React from "react";
import '../styles/Track.css'

function PlaylistTrack({trackObject, removeTrack}) {

    const handleRemove = (event) => {
        removeTrack(trackObject.id);
        console.log(trackObject.img);
    };

    return (
        <div className="track-container">  
            <img src={trackObject.img} className="album-img"/>
            <div>
                <h3>{trackObject.title}</h3>
                <p>{trackObject.artist} | {trackObject.album}</p>
            </div>
            <button onClick={handleRemove}>Rem</button>
        </div>
    )
}

export default PlaylistTrack;