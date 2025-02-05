import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
import gasp from "gsap"
function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
     gasp.to('.box', {
      x:200,
      duration: 2,
      xPercent: 100,
      repeat: 2,
      delay: 1,
      yoyo: true,
      rotate: 360,
      backgroundColor: "green"
     })
  },[])
  return (
    <>
    <div className=' bg-red-500 h-screen'>
       <div className=' box bg-blue-600 size-40 '></div>
       <div className=' box bg-blue-600 size-40 '></div>
    </div>
    </>
  )
}

export default App
