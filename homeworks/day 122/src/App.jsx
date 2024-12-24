import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Description, Textarea } from '@headlessui/react'
function App() {
  

  return (
    <>
  
       <h2>Discription</h2>

       <h3>This will be shown under the product title.</h3>   
       <textarea className='textarea'></textarea>
    </>
  )
}

export default App
