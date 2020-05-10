import React, { useState } from 'react';
import classes from './App.module.css'
import Person from "./Person";

const App = (props) => {

  const [persons, setPersons] = useState([
    {
      name: 'Neung',
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

  const [displayPersons, setDisplayPersons] = useState(true)

  const toggleDisplayPersons = () => {
    setDisplayPersons(!displayPersons)
  }

  const onNameChanged = (event, index) => {

    const newPersons = [...persons]
    const newPerson = {...newPersons[index]}
    newPerson.name = event.target.value
    newPersons[index] = newPerson

    setPersons(newPersons)
  }

  const buttonClasses = [classes.Button]
  const jsxPersons =[]
  if (displayPersons) {
    for (const index in persons) {
      const person = persons[index]
      jsxPersons.push(
          <Person
              key={index}
              person={person}
              onChange={(event) => onNameChanged(event, index)} />
      )
    }

    buttonClasses.push(classes.Red)
  }

  return (
    <div className={classes.App}>
      <h1>Hi</h1>
      <button type={"button"} className={buttonClasses.join(' ')} onClick={toggleDisplayPersons}>{displayPersons ? 'Hide' : 'Show'}</button>
      {jsxPersons}
    </div>
  );
}

export default App;
