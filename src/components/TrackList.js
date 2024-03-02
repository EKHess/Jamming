import React from "react";
import Track from "./Track";

const tracks = [
    {
        title: "Take On Me",
        artist: "A-ha",
    },
    {
        title: "Sweet Dreams (Are Made of This) - Remastered",
        artist: "Eurythmics, Annie Lennox, Dave Stewart",
    },
    {
        title: "You Make My Dreams (Come True)",
        artist: "Daryl Hall & John Oates",
    }
]

function TrackList() {
    return (
        <>
            {tracks.map((track) => <Track artist={track.artist} title={track.title} />)}
        </>
    )
}

export default TrackList;