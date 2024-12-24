import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h2 className='react'>react builder</h2>
       
       <p className='project'>create Project</p>
       <p className='marcel'>marcel</p>
  <h2 className='a'>Create beautiful React <br /> tamplets 10x faster</h2>
  <p className='b'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Accusamus, magnam vero, doloribus <br /> nulla, tenetur recusandae totam eius aspernatur nam neque <br /> delectus modi consequatur mollitia <br /> quam amet blanditiis corporis ab? Autem!</p>

  <button className='demo'>Try Demo</button>
    </>
  )
}

export default App
