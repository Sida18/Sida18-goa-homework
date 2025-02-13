import {useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
       fetch('http://localhost:3000/hllo/hello')
       .then(res => res.json())
       .then(d=> setData(d))
     },[])

  return (
    <>
      
             {data.Team1}
        
    </>
  )
}

export default App
