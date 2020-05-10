import React, {useState} from 'react';
import './App.css';
import UserInput from "./UserInput";
import UserOutput from "./UserOutput";

const App = () => {

    const [username, setUsername] = useState('')

    const onUsernameChanged = (event) => {
        setUsername(event.target.value)
    }

    return (
        <div className="App">
            <UserInput onChange={onUsernameChanged.bind(this)}/>
            <UserOutput username={username} />
        </div>
    );
}

export default App;
