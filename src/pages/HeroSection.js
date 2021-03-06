import React from 'react'
import { Link } from 'react-scroll'

const HeroSection = () => {
  return (
    <section className="home" id="home">
      <div className="max-width">
        <div className="home-content">
          <div className="underline"></div>
          <div className="text-1">
            Hello, my name is</div>
          <div className="text-2">
            Karishma Patel</div>
          <div className="text-3">
            And I'm a <span className="typing">Software Developer</span></div>
          <Link to="contact">CONTACT ME</Link>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
