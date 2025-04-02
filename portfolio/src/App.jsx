import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Education from './components/Education'
import Exprience from './components/Exprience'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <HeroSection/>
    <About/>
    <Education/>
    <Exprience/>
    <Projects/>
    <Contact/>
    <Footer/>
    
    </>
  )
}

export default App
