import React from "react"
import './index.css'

const ValidationComponent = (props) => {

    return (
        <div className={"ValidationComponent"}>
            {props.text.length < 5 ? 'Text too short' : 'Text long enough'}
        </div>
    )
}

export default ValidationComponent