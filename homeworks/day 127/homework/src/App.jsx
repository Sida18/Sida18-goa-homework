import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Login } from './login'
import { SignUp } from './signUp'
import { Landing } from './LandingPage.jsx'
import { Home } from './Home.jsx'
import { Navbar } from './Navbar.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    
    <>
  

      <div className='Routes'>
         <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/login/*'  element={<Login></Login>}></Route>
          <Route path='/signUp' element={<SignUp></SignUp>}></Route>
          <Route path='/Landing' element={<Landing></Landing>}></Route>
        </Routes>

      </div>
      </>
  )
}

export default App
