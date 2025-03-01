import { useEffect, useState } from 'react'

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000')
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
