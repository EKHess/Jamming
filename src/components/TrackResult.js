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
                    <h3><a className="song-title" href={`https://open.spotify.com/track/${trackObject.id}`} target='_blank'>{trackObject.title}</a></h3>
                    <p className="artist-album-name">{trackObject.artist} | {trackObject.album}</p>
                </div>
            </div>
            <button onClick={handleAdd}><span className="track-icon"><ion-icon name="add-circle-outline"></ion-icon></span></button>
        </div>
    )
}

export default TrackResult;