import React from "react";

function Track(props) {
    return (
        <>  
            <h3>{props.title}</h3>
            <p>{props.artist}</p>
            <button>Add</button>
        </>
    )
}

export default Track;