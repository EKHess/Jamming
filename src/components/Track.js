import React from "react";
import '../styles/Track.css';
import AddOrRemoveButton from "./AddOrRemoveButton";

function Track({trackObject}) {
    return (
        <div className="track-container">  
            <div>
                <h3>{trackObject.title}</h3>
                <p>{trackObject.artist} | {trackObject.album}</p>
            </div>
            <AddOrRemoveButton add={true} />
        </div>
    )
}

export default Track;