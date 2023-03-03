import React, { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import Card from '../components/Card'
import Header from '../components/Header'
import HowItWorks from '../components/HowItWorks'
import Advantages from '../components/Advantages'
import Footer from '../components/Footer'

const App: React.FC = () => {
  const [count, setCount] = useState(0)

  return (
    <div className = "App">
      <div className = "MAIN_WRAPPER h-screen sm:w-full">
        <Header/>
        <HowItWorks/>
        <Advantages/>
        <Footer/>
      </div>
     
    </div>
  )
}

export default App
