
import { useState } from 'react'
import './App.css'

function App() {

 const [value, setValue] = useState('')
 const [todo, setodo] = useState([]) 

 function add() {
     setodo([...todo, value])
     console.log()
 }
 console.log(value)
  return (
    <>
       < input value={value}  onChange={(e) => setValue(e.target.value) }   input type="text" />
       <button onClick={() => add()}>add</button>

       {todo.map((item, index) => (
        <div>{item}</div>
       ))}
    </>
  )
}

export default App
