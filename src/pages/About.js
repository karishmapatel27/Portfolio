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
              I am a self-motivated and highly enthusiastic full-stack developer and recent graduate of Web-development Bootcamp from Enspiral Dev Academy. My background includes bachelors in Information and Communication Technology from Manukau Institute of Technology, as well as customer service experience from various roles.  <br /><br />
              After finishing my bachelor's degree, I went to study a Bachelor of Nursing at the University of Auckland for about a year and a half. This small self-exploration journey taught me many valuable skills, but most importantly, it made me realise my love and passion for coding.  <br /><br />
              This portfolio is a representation of the skills that I gained during 15 weeks of coding Bootcamp, and I'm now polishing the existing skills as well as learning new technologies to grow myself as a full-stack developer. I call myself a forever student; it's because I am always hungry to expand my knowledge and hone my skills. The challenges that come with learning excites me and keep me motivated. <br /><br />
              Alongside this, I am very fond of food and socialising, so I enjoy cooking, meeting my friends over coffee/drink and spending some quality time with family.</p><br />
            <a target="_blank" rel="noopener noreferrer" class="cta-btn cta-btn--resume" href="https://drive.google.com/file/d/1GYqVXjYDN7PLz13jYZfKpWMUiuiFk620/view?usp=sharing">MY RESUME</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
