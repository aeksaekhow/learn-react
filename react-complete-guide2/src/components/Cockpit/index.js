import React from 'react'
import classes from './styles.module.css'

class Cockpit extends React.Component {

    render = () => {

        const buttonClasses = [classes.Button]
        if (this.props.displayPersons) {
            buttonClasses.push(classes.Red)
        }

        return (
            <div className={classes.Cockpit}>
                <h1>Hi, there {this.props.personAmount <= 1 ? 'is' : 'are'} {this.props.personAmount} persons.</h1>
                <button
                    type={"button"} className={buttonClasses.join(' ')}
                    onClick={this.props.toggleDisplayPersonsHandler}>
                    {this.props.displayPersons ? 'Hide' : 'Show'}
                </button>
            </div>
        )
    }

}

export default Cockpit