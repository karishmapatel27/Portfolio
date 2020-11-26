import React, { useState } from 'react'
import Sidebar from '../components/Navbar/Sidebar'
import Navbar from '../components/Navbar/Navbar'
import HeroSection from "./HeroSection"
import About from './About'
import Contact from './Contact'
import Footer from '../components/Footer'
import Projects from './Projects'
import { FaArrowCircleUp } from 'react-icons/fa';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [showScroll, setShowScroll] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 500) {
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 500) {
      setShowScroll(false)
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.addEventListener('scroll', checkScrollTop)

  return (
    <>

      <FaArrowCircleUp className="scrollTop"
        onClick={scrollTop}
        style={{ height: 40, display: showScroll ? 'flex' : 'none' }} />

      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <About />
      <Projects />
      <Contact />
      <Footer />

    </>
  )
}

export default Home
