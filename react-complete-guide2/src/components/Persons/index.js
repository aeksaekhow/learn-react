import React, {useState} from "react";
import classes from './styles.module.css'
import Person from './Person'

class Persons extends React.Component {

    render = () => {
        const jsxPersons = []
        for (const index in this.props.persons) {
            const person = this.props.persons[index]
            jsxPersons.push(
                <Person
                    key={index}
                    person={person}
                    onNameChange={(event) => this.props.nameChangeHandler(event, index)}
                    onPersonDelete={(event) => this.props.personDeleteHandler(event, index)}/>
            )
        }

        return (
            <div className={classes.Persons}>
                {jsxPersons}
            </div>
        )
    }
}

export default Persons