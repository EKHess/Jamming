import React from "react";

function AddOrRemoveButton({add}) {
    if (add) {
        return <button>Add</button>;
    } else {
        return <button>Rem</button>
    }
}

export default AddOrRemoveButton;