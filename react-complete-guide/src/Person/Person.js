import React from 'react'

const Person = (props) => {
    console.log(props.children)
    return (
        <div>
            <p>My name is {props.name}. I'm {props.age} years old.</p>
            <p>{props.children}</p>
        </div>
    )
}

export default Person
