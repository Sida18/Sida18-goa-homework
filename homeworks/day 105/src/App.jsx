
import { useState } from 'react'
import './App.css'

function App() {
 const [index, setindex] = useState(0)
function click(){
  setindex(index + 1)
}
  return (
    <>


       <h1 className='programm'>counter programm</h1>
        
        <button onClick={() => click()} className='click'>click me pls. <span>{index}</span></button>




    </>
  )
}

export default App
