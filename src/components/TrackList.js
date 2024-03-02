import React from "react";
import Track from "./Track";
import '../styles/TrackList.css'

function TrackList({tracksArr}) {


    return (
        <div className="result-tracks">
            {tracksArr.map((track) => <Track trackObject={track}/>)}
        </div>
    )
}

export default TrackList;