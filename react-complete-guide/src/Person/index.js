import React from 'react'
import './Person.css'
import Radium from "radium";

const Person = (props) => {

    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    }

    return (
        <div className={"Person"} style={style}>
            <p>My name is {props.person.name}. I'm {props.person.age} years old.</p>
            <input type="text" value={props.person.name} onChange={props.onChange}/>
        </div>
    )
}

export default Radium(Person)
