import React, { useState } from 'react';
import './App.css';
import Person from './Person'
import styled from "styled-components";

const StyledDiv = styled.div`
text-align: center;
`

const StyledButton = styled.button(props => `
        background-color: ${props.alt === 'true'  ? 'red' : 'green'};
        color: white;
        font: inherit;
        border: 1px solid blue;
        padding: 8px;
        cursor: pointer;
        &:hover {
            background-color: ${props.alt === 'true' ? '#ffcccb' : 'lightgreen'};
            color: black;
        }
`)

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

    }

    return (
        <StyledDiv>
            <h1>Hi, Aek Sae-khow</h1>
            <StyledButton alt={display.toString()} onClick={toggleDisplay}>{display ? 'Hide' : 'Show'}</StyledButton>
            {jsxPersons}
        </StyledDiv>
    )

}


export default App
