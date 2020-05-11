import React, {Fragment} from 'react'
import classes from './styles.module.css'
import withClass from '../../hoc/withClass'
import PersonAmountContext from '../../contexts/PersonAmountContext'

class Cockpit extends React.Component {

    constructor(props) {
        super(props);
    }

    render = () => {

        const buttonClasses = [classes.Button]
        if (this.props.displayPersons) {
            buttonClasses.push(classes.Red)
        }

        return (
            <Fragment>
                <PersonAmountContext.Consumer>
                {
                    (personAmount) => (
                        <Fragment>
                            <h1>Hi, there {personAmount <= 1 ? 'is' : 'are'} {personAmount} persons.</h1>
                            <button
                                type={"button"} className={buttonClasses.join(' ')}
                                onClick={this.props.toggleDisplayPersonsHandler}>
                                {this.props.displayPersons ? 'Hide' : 'Show'}
                            </button>
                        </Fragment>
                    )
                }
                </PersonAmountContext.Consumer>
            </Fragment>
        )
    }

}

export default withClass(Cockpit, classes.Cockpit)