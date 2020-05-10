import React, { useState } from 'react';
import './App.css';
import Person from './Person'
import Radium, {StyleRoot} from "radium";

const App = () => {

    const [ persons, setPersons ] = useState([
        {
            name: 'Aek',
            age: 29
        },
        {
            name: 'Mook',
            age: 28
        },
        {
            name: 'Song',
            age: 25
        }
    ])

    const [display, setDisplay] = useState(true)

    const toggleDisplay = () => {

        setDisplay(!display)
    }

    const nameChangedHandler = (event, index) => {

        const newPersons = [...persons]
        const newPerson = {...newPersons[index]}
        newPerson.name = event.target.value
        newPersons[index] = newPerson

        setPersons(newPersons)
    }

    const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer',
        ':hover': {
            backgroundColor: 'lightgreen',
            color: 'black'
        }
    }

    const jsxPersons = []
    if (display) {
        for (const index in persons) {
            const person = persons[index]
            jsxPersons.push(
                <Person
                    key={index}
                    person={person}
                    onChange={(event) => nameChangedHandler(event, index)}/>
            )
        }

        style.backgroundColor = 'red'
        style[':hover'] = {
            backgroundColor: '#ffcccb',
            color: 'black'
        }
    }

    return (
        <StyleRoot>
            <div className="App">
                <h1>Hi, Aek Sae-khow</h1>
                <button
                    style={style}
                    onClick={toggleDisplay}>{display ? 'Hide' : 'Show'}</button>
                {jsxPersons}
            </div>
        </StyleRoot>
    )

}


export default Radium(App);
