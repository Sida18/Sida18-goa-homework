
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
 import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import About from './about'
import Book from './Book'
import Book1 from './Book1'
import Navbar from './Navbar'

function App() {
  

  return (
    
    <>
    <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
           <Route path='/Booklay'>
            
             <Route path='' element={<Book></Book>}></Route>
          <Route  path='/Book1/:id' element={<Book1></Book1>}></Route>
        
           </Route>
       
      </Routes>
      
     </>
  )
}

export default App
