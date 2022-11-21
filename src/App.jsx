import './App.css'
import QuoteBox from './components/QuoteBox'
import quotes from './json/DB.json'
import { useState } from 'react'

function App() {  
  const getRandomFromArray = arr => {
    const indexRamdom = Math.floor(Math.random() * arr.length)
    return arr[indexRamdom]
  }

  const colorRandom = () => {
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)

    return `rgb(${r} ${g} ${b})`
  }

  const [quoteRamdom, setQuoteRandom] = useState(getRandomFromArray(quotes))
  const [colorR, setColorR] = useState(colorRandom())

  const handleClick = () => {
    setQuoteRandom(getRandomFromArray(quotes))
    setColorR(colorRandom())
  }


  const objStyle = {
    backgroundColor: colorR,
    color: colorR
  }

  return (
    <div className="App" style={objStyle}>
      <QuoteBox
        quoteRamdom={quoteRamdom}
        handleClick={handleClick}
        color={colorR}
      />
    </div>
  )
}

export default App
