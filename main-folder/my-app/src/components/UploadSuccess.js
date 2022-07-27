import React from 'react'
import checkmark from "./checkmark.png"

function UploadSuccess() {

    return (
        <div className="success">
            Success
            <img
                src={checkmark}
                height="20"
                width="20"
            ></img>
        </div>
    )
}

export default UploadSuccess