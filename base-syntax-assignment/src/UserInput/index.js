import './UserInput.css'
import React from 'react'

const UserInput = (props) => {

    return (
        <div className={"UserInput"}>
            <label htmlFor="username">Username</label>
            <input type="text" name={"username"} onChange={props.onChange}/>
        </div>
    )
}

export default UserInput
