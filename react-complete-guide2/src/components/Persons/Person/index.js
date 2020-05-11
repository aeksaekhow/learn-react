import React, {Fragment} from "react";
import classes from './styles.module.css'
import withClass from '../../../hoc/withClass'
import PropTypes from 'prop-types'
import PersonAmountContext from '../../../contexts/PersonAmountContext'

class Person extends React.Component {

    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef()
    }

    componentDidMount() {
        this.inputElementRef.current.focus()
    }

    render = () => {
        return (
            <Fragment>
                <PersonAmountContext.Consumer>
                    {
                        (personAmount) => (
                            <Fragment>
                                <p>My name is {this.props.person.name}. I'm {this.props.person.age} years old.</p>
                                <p>We now have {personAmount} persons left.</p>
                                <input ref={this.inputElementRef} type="text" value={this.props.person.name} onChange={this.props.onNameChange} />
                                <button type={'button'} onClick={this.props.onPersonDelete}>Delete</button>
                            </Fragment>
                        )
                    }
                </PersonAmountContext.Consumer>
            </Fragment>
        )
    }
}

Person.propTypes = {
    person: PropTypes.shape({
        name: PropTypes.string,
        age: PropTypes.number
    }),
    onNameChange: PropTypes.func,
    onPersonDelete: PropTypes.func
}

export default withClass(Person, classes.Person)