import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div className="login">
        <div className="date-day-month">
        <input type="text" id='date' placeholder='Date'/>
        <input type="text" className='day' placeholder='Day' />
        <input type="text" className='month' placeholder='Month' />
        </div>
          <p className='enter'>enter your email please: </p>
          <input type="email" className='email' placeholder='enter your email :)' />
          <p className='enter1'>enter your password please:</p>
          <input type="password" className='password' placeholder='enter your password :)' />
          <button className='Login'>Login</button>
       </div>
    </>

  )
}

export default App
