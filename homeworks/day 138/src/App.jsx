import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import gsap from 'gsap'
function App() {
  const [count, setCount] = useState(0)
  const boxref = useRef(null)
  const textref = useRef(null)
  const tl = gsap.timeline()
  useEffect(() => {
          // this is scean one
          tl.to(boxref.current, {
             x:200,
             duration: 1
          })
         // this is scean two
          tl.to(boxref.current,{
            y:200,
            duration: 1
          })

          // this is scean three

         tl.to(boxref.current,{
          scale: 1.1
         })

         // this is the final sean

         tl.fromTo(textref.current,{
               opacity: 0
         },
         {
           opacity:1
         }
        
        )
  },[])
  return (
    <>
      <div>
          <div ref={boxref} className=' bg-black size-40'><p ref={textref} className='text text-white'>ill come back...</p></div>
      </div>
     
    </>
  )
}

export default App
