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
                    <h3><a className="song-title" href={`https://open.spotify.com/track/${trackObject.id}`} target='_blank'>{trackObject.title}</a></h3>
                    <p className="artist-album-name">{trackObject.artist} | {trackObject.album}</p>
                </div>
            </div>
            
            <button onClick={handleRemove}><span className="track-icon"><ion-icon name="remove-circle-outline"></ion-icon></span></button>
        </div>
    )
}

export default PlaylistTrack;