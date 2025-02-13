import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='knockout-stages'>
            <div className='first-leg'>
                <h3 className='REAL'>Real madrid 3 - 2 stay humble fc</h3>
                <h3 className='dortmund'>sporting 0 - 3 dortmund</h3>
                <h3 className='club'>atlanta 1 - 2 club brugge</h3>
                <h3 className='bayern'>bayern 2 - 1 celtic</h3>
                <h3 className='feynoord'>feynoord 1 - 0 milan</h3>
                <h3 className='PSG'>PSG 3 - 0 brest</h3>
                <h3 className='benfica'>monoco 0 - 1 benfica</h3>
                <h3 className='juventus'>juventus 2 - 1 PSV</h3>
            </div>
      </div>
      
    </>
  )
}

export default App
