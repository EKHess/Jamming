import React from "react";
import '../styles/Track.css';

function TrackResult({trackObject, addTrack}) {

    const handleAdd = (event) => {
        const newTrack = {
            title: trackObject.title,
            artist: trackObject.artist,
            album: trackObject.album,
            id: trackObject.id,
            uri: trackObject.uri,
            img: trackObject.img,
        };

        addTrack(newTrack);
    };

    return (
        <div className="track-container">  
            <div className="text-and-image-container">
                <img src={trackObject.img} className="album-img" alt="Album artwork"/>
                <div>
                    <h3>{trackObject.title}</h3>
                    <p>{trackObject.artist} | {trackObject.album}</p>
                </div>
            </div>
            <button onClick={handleAdd}><ion-icon name="add-circle-outline"></ion-icon></button>
        </div>
    )
}

export default TrackResult;