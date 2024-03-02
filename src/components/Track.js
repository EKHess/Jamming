import React from "react";
import '../styles/Track.css';

function Track(props) {
    return (
        <div className="track-container">  
            <div>
                <h3>{props.title}</h3>
                <p>{props.artist}</p>
            </div>
            <button>Add</button>
        </div>
    )
}

export default Track;