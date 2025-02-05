import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState([])
 useEffect(() => {
      fetch('http://localhost:3000/iphone/Shop')
      .then(res => res.json())
      .then(d=> setData(d))
    },[])
  return (
   
    <>
    
      <div>
        {data.title}
        </div>
    </>
  )
}

export default App
