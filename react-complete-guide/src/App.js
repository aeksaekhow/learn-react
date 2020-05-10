import React, { useState } from 'react';
import './App.css';
import Person from './Person'

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

    const switchNameHandler = () => {

        setPersons([
            {
                name: 'Aek Sae-khow',
                age: 29
            },
            {
                name: 'Chotmanee Thong-aom',
                age: 28
            },
            {
                name: 'Sarunya Sae-khow',
                age: 25
            }
        ])
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
        cursor: 'pointer'
    }

    const jsxPersons = []
    for (const index in persons) {
        const person = persons[index]
        jsxPersons.push(
            <Person
                key={index}
                person={person}
                onChange={(event) => nameChangedHandler(event, index)} />
        )
    }

    return (
        <div className="App">
            <h1>Hi, Aek Sae-khow</h1>
            <button
                style={style}
                onClick={switchNameHandler}>Switch Names</button>
            {jsxPersons}
        </div>
    )

}


export default App;
