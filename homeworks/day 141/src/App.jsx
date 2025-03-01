import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todo, settodo] = useState([])
  function add1() {
       settodo([...todo, 'Napoleon'])
  }  

  return (
    <>

     <div className="napoleon">
       <h1 className='about'>this is site abt napoleon and franch revalution</h1>
       <h2 className='learn'>today we will learn abt napoleon who was he and <br /> what did he do and how did franch revalution start </h2>
       <div>
        <div className="div1">
        <h1 className='who'>who was napoleon</h1>
        <p className='text'>Napoleon Bonaparte (born Napoleone di Buonaparte; 15 August 1769 – 5 May 1821), later <br /> known by his regnal name Napoleon I, was a French military <br /> officer and statesman who rose to prominence during the French Revolution <br /> and led a series of successful campaigns across Europe <br /> during the French Revolutionary and Napoleonic Wars from 1796 to 1815.  <br />He was the leader of the French Republic as First Consul from 1799 to 1804, then of <br /> the French Empire as Emperor of the French from 1804 to 1814, and briefly again in 1815. 

              </p>


        </div>

        <div className='div2'>

        <h1 className='what'>what did Napoleon do?</h1>
        <p className='text1'>Napoleon served as first consul of France from 1799 to 1804. <br /> In that time, Napoleon reformed the French educational system, developed a civil <br /> code (the Napoleonic Code), and negotiated the Concordat of 1801. <br /> He also initiated the Napoleonic Wars.
</p>
        </div>

        <div className="div3">
               <h1 className='how'>how did franch Revolution start?</h1>
               <p className="text2">
On July 14 1789 the Paris mob,  hungry due to a lack  of food from poor harvests, <br /> upset at the conditions of their lives and annoyed with their <br /> King and Government, stormed the Bastille fortress (a prison). <br /> This turned out to be more symbolic than anything <br /> else as only four or five prisoners were found.</p>
        </div>
   
 
         </div>

     </div>
     
     </>
  )
}

export default App
