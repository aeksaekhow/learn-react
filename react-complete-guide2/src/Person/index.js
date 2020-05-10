import React from "react";
import classes from './Person.module.css'

const Person = (props) => {

    return (
        <div className={classes.Person}>
            <p>My name is {props.person.name}. I'm {props.person.age} years old.</p>
            <input type="text" value={props.person.name} onChange={props.onChange}/>
        </div>
    )
}

export default Person