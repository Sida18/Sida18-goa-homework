import { useState } from 'react'
import './App.css'

function App() {
  const [api,setApi] = useState('')
  const [post,setpost] = useState('post')
  fetch(`https://jsonplaceholder.typicode.com/todos/${post}`)
  .then(response => response.json())
  .then(json => setApi(json))
  


  return (
    <>
      
    </>
  )
}

export default App
