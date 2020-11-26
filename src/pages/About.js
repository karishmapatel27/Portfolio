import React from 'react'

const About = () => {
  return (
    <section className="about" id="about">
      <div className="max-width">
        <h2 className="title">
          About me</h2>
        <div className="about-content">
          <div className="column left">
            <img src="profile.jpg" alt="profile" />
          </div>
          <div className="column right">
            <div className="text">
              Hi<span className="typing-2"> There</span></div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ut voluptatum eveniet doloremque autem excepturi eaque, sit laboriosam voluptatem nisi delectus. Facere explicabo hic minus accusamus alias fuga nihil dolorum quae. Explicabo illo unde, odio consequatur ipsam possimus veritatis, placeat, ab molestiae velit inventore exercitationem consequuntur blanditiis omnis beatae. Dolor iste excepturi ratione soluta quas culpa voluptatum repudiandae harum non.</p>
            <a target="_blank" rel="noopener noreferrer" class="cta-btn cta-btn--resume" href="https://drive.google.com/file/d/1plcgzPV7b9ZyHljyh_QyPJ4yhzTu24qF/view">MY RESUME</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
