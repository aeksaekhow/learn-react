import React, {Fragment} from "react";
import classes from './styles.module.css'
import withClass from '../../../hoc/withClass'

class Person extends React.Component {

    render = () => {
        return (
            <Fragment>
                <p>My name is {this.props.person.name}. I'm {this.props.person.age} years old.</p>
                <input type="text" value={this.props.person.name} onChange={this.props.onNameChange}/>
                <button type={'button'} onClick={this.props.onPersonDelete}>Delete</button>
            </Fragment>
        )
    }
}

export default withClass(Person, classes.Person)