import React, {useState} from 'react'
import './App.css'
import ValidationComponent from "./ValidationComponent"
import CharComponent from "./CharComponent"

const App = () => {

  const [text, setText] = useState('')

  const onTextChanged = (event) => {
    setText(event.target.value)
  }

  const removeText= () => {
    setText('')
  }

  const jsxCharComponents = []
  for (let i = 0;i < text.length;i++) {
      const character = text[i]
      jsxCharComponents.push(<CharComponent key={i} character={character} onClick={removeText} />)
  }

  return (
    <div className="App">
      <label htmlFor="text">Text </label>
      <input type="text" id={"text"} onChange={onTextChanged}  />
      <ValidationComponent text={text} />
      {jsxCharComponents}
    </div>
  )
}

export default App;
