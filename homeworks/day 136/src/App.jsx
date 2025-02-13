import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignUp from './sign-up'
import Contacts from './Contact'
import Login from './Login'
import gsap from 'gsap'
function App() {
  
  useEffect(() => {
     gsap.to('.box', {x:200 })
  },[])
  
  return (
    <>
      <div className='  flex gap-20 ' >
       
            <p className='box'>signup</p>
            <p className='box'>login</p>
            <p className='box'>Contact</p>
      </div>
    
    </>
  )
}

export default App
