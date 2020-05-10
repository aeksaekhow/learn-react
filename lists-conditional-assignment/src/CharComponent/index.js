import React from "react"
import './index.css'

const CharComponent = (props) => {

    return (
        <div className="CharComponent" onClick={props.onClick}>
            {props.character}
        </div>
    )
}

export default CharComponent