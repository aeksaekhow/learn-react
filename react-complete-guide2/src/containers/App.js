import React, { useState } from 'react';
import classes from './App.module.css'
import Persons from '../components/Persons'
import Cockpit from '../components/Cockpit'

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      persons: [
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
      ],
      displayPersons: true
    }
  }


  onNameChange = (event, index) => {

    const newPersons = [...this.state.persons]
    const newPerson = {...newPersons[index]}
    newPerson.name = event.target.value
    newPersons[index] = newPerson

    this.setState({
      persons: newPersons
    })
  }

  onPersonDelete = (event, index) => {

    this.setState((previousState, props) => {

      const newPersons = []
      for (const i in previousState.persons) {
        if (i === index) continue
        newPersons.push(previousState.persons[i])
      }

      return {
        persons: newPersons
      }
    })

  }

  toggleDisplayPersons = () => {

    this.setState((previousState, props) => {
      return {
        displayPersons: !previousState.displayPersons
      }
    })

  }

  render = () => {


    return (
        <div className={classes.App}>
          <Cockpit
              personAmount={this.state.persons.length}
              toggleDisplayPersonsHandler={this.toggleDisplayPersons}
              displayPersons={this.state.displayPersons}/>
          {this.state.displayPersons ? <Persons
              persons={this.state.persons}
              nameChangeHandler={this.onNameChange}
              personDeleteHandler={this.onPersonDelete}/> : null}
        </div>
    );
  }
}

export default App;
