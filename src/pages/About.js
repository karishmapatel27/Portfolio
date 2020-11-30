import React from 'react'

const About = () => {
  return (
    <section className="about" id="about">
      <div className="max-width">
        <h2 className="title1">
          About Me</h2>
        <div className="about-content">
          <div className="column left">
            <img src="profile.jpg" alt="profile" />
          </div>
          <div className="column right">
            <div className="text">
              Hi<span className="typing-2"> There </span></div>
            <p>
              I am a self-motivated and driven Full-Stack developer and recent graduate of Web-Development Bootcamp from Enspiral Dev Academy. My background includes a bachelor degree in Information and Communication Technology, as well as customer service experience from previous employment.
              I call myself a forever student; it's because I am always hungry to expand my knowledge and hone my existing skills. The challenges that come with learning excites me and keep me motivated. <br /><br />
              This portfolio is a representation of the skills that I gained during 15 weeks of coding Bootcamp, and I'm now polishing the existing skills as well as learning new technologies to grow myself as a full-stack developer. <br /><br />
              Alongside this, I am very fond of food, so I enjoy cooking, socializing over coffee/drink and spending some quality time with my friends and family.</p><br />
            <a target="_blank" rel="noopener noreferrer" class="cta-btn cta-btn--resume" href="https://drive.google.com/file/d/1plcgzPV7b9ZyHljyh_QyPJ4yhzTu24qF/view">MY RESUME</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
