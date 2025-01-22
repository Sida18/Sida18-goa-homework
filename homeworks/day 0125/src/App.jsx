import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="Radish">
    <h1 className='about'>this is site about Radish</h1>
    <h3 className='learn'>in this site you will learn about Radish</h3>
     <button  id='sign'>sign up</button>
     <div id="king">
<div className="div1">
       <h1 className='how'>where did Radish come from?</h1>
       <p className='from'>First cultivated in China, radish crops spread through <br /> the Northern Hemisphere and into Europe in the 1500s. Radishes had <br /> reached Massachusetts by 1629. Radishes are members of the Brassicaceae <br /> (mustard or cabbage) family. The root <br /> is related to kale, broccoli, cauliflower, and horseradish, among others.</p>
    </div>

    <div className="div2">
      <h1 className='how1'>what is radish made out of</h1>
      <p className='made'>The radish (Raphanus sativus) is a flowering <br /> plant in the mustard family, Brassicaceae. Its large taproot is commonly used <br /> as a root vegetable, although the entire plant is edible and its leaves are sometimes <br /> used as a leaf vegetable.</p>
    </div>

    <div className="div3">
      <h1 className='how2'>what is radish </h1>
      <p className='radish1'>The radish (Raphanus sativus) is a flowering plant in the <br /> mustard family, Brassicaceae. Its large taproot is commonly used as a <br />  root vegetable, although the entire plant is edible and its leaves are sometimes used as a <br /> leaf vegetable. Originally domesticated in Asia, radishes are now grown and <br /> consumed throughout the world. <br /> The radish is sometimes considered to form a species complex with the wild radish, <br /> and instead given the trinomial <br /> name Raphanus raphanistrum subsp. sativus.</p>
    </div>

    <div className="div4">
      <h1 className='how3'>radishis culture</h1>
      <p className="cultre"> The daikon varieties of radish are important parts <br /> of East, Southeast, and South Asian cuisine. In Japan and Korea, radish dolls are sometimes <br /> made as children's toys. Daikon is also one of the plants that make up the Japanese Festival <br /> of Seven Herbs (Nanakusa no sekku) on the seventh day after the new year </p>
    </div>
    </div>
    </div>

    </>
  )
}

export default App
