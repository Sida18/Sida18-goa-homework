import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Link,Route,Routes } from 'react-router-dom'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <ul>
    <Link to={'/home'}>
      <li>home</li>
    </Link>

    <Link to={"/About"}>
       <li>about</li>
    </Link>
   </ul>

          <Routes>
              <Route path='/home' element={<Home></Home>}></Route>
              <Route path='/About' element={<About></About>}></Route>
          </Routes>
    </>
  )
}

export default App
