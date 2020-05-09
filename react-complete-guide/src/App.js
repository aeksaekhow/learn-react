import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

    state = {
        persons: [
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
        ]
    }

    switchNameHandler = () => {

        this.setState({
            persons: [
                {
                    name: 'Aek Sae-khow',
                    age: 29
                },
                {
                    name: 'Mook',
                    age: 28
                },
                {
                    name: 'Sarunya Sae-khow',
                    age: 25
                }
            ]
        })
    }

  render() {
    return (
      <div className="App">
          <h1>Hi, Aek Sae-khow</h1>
          <button onClick={this.switchNameHandler}></button>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    )

      // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hello'))
  }
}

export default App;
