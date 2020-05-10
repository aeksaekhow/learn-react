import React from 'react'
import './Person.css'

const Person = (props) => {

    return (
        <div className={"Person"}>
            <p>My name is {props.person.name}. I'm {props.person.age} years old.</p>
            <input type="text" value={props.person.name} onChange={props.onChange}/>
        </div>
    )
}

export default Person
