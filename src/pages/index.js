import React, { useState } from 'react'
import Sidebar from '../components/Navbar/Sidebar'
import Navbar from '../components/Navbar/Navbar'
import HeroSection from "../components/HeroSection"
import About from './About'
import Contact from './Contact'
import Footer from '../components/Footer'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <About />
      <Contact />
      <Footer />

    </>
  )
}

export default Home
