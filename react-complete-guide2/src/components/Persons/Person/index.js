import React, {Fragment} from "react";
import classes from './styles.module.css'
import withClass from '../../../hoc/withClass'
import PropTypes from 'prop-types'

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
                <p>My name is {this.props.person.name}. I'm {this.props.person.age} years old.</p>
                <input ref={this.inputElementRef} type="text" value={this.props.person.name} onChange={this.props.onNameChange} />
                <button type={'button'} onClick={this.props.onPersonDelete}>Delete</button>
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