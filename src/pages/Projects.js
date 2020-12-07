import React from 'react'
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="max-width">
        <h2 className="title">
          Projects</h2>
        <div className="project-content">
          <div className="column left">
            <img src="give-me1.png" alt="profile" />
          </div>
          <div className="column right">
            <div className="project-info">
              <span className="project-number">01</span>
              <h3>Give Me</h3>
              <p className="project-desc">
                GiveMe is the final project that I created with an exceptional team and presented at our bootcamp's graduation. As a team, we created a platform that enables kiwis to donate unwanted goods. User can list unwanted items and person interested in that item can then get the contact details of the product owner.</p>
              <div className="project-stack">
                <span>React hooks</span>
                <span>React Context</span>
                <span>JavaScript</span>
                <span>CSS</span>
                <span>Authenticare</span>
                <span>SQLite3</span>
                <span>Knex.js</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/karishmapatel27/GiveMe" rel="noreferrer" target="_blank">
                  <FaGithubSquare className="project-icon" />
                </a>
                <a href="https://drive.google.com/file/d/1fX2vbLq852UVHxss63W_1r4LnqQAGBfm/view?usp=sharing">
                  <FaShareSquare className="project-icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="project-content">
          <div className="column left">
            <img src="tell-story.png" alt="profile" />
          </div>
          <div className="column right">
            <div className="project-info">
              <span className="project-number">02</span>
              <h3>Tell Story</h3>
              <p className="project-desc">
                TellStory is a simple and entertaining story generator game, based on an idea given by our team member. This game was our Friday project of week three in bootcamp.<br />
                This game was our way to practise newly learnt skills such as RDBMS, Knex.js and Handlebars.</p>
              <div className="project-stack">
                <span>Express-Handlebars</span>
                <span>Express.js</span>
                <span>JavaScript</span>
                <span>Knex.js</span>
                <span>SQLite3</span>
                <span>CSS</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/karishmapatel27/TellStory" rel="noreferrer" target="_blank">
                  <FaGithubSquare className="project-icon" />
                </a>
                <a href="https://tell--story.herokuapp.com/" rel="noreferrer" target="_blank" >
                  <FaShareSquare className="project-icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="project-content">
          <div className="column left">
            <img src="meme-generator.png" alt="profile" />
          </div>
          <div className="column right">
            <div className="project-info">
              <span className="project-number">03</span>
              <h3>Meme Generator</h3>
              <p className="project-desc">
                This is a single-day project where our team decided to create a meme builder website. We built this project to test out knowledge on React and React router. To add some humour, we decided to use images of our teachers and students from EDA.</p>
              <div className="project-stack">
                <span>React</span>
                <span>React Router</span>
                <span>Canvas</span>
                <span>Javascript</span>
                <span>CSS</span>
                <span>semantic-ui</span>
                <span>HTML</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/karishmapatel27/MKMKG_limited_org" rel="noreferrer" target="_blank">
                  <FaGithubSquare className="project-icon" />
                </a>
                <a href="https://react-meme-builder.netlify.app/#/" rel="noreferrer" target="_blank" >
                  <FaShareSquare className="project-icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="project-content">
          <div className="column left">
            <img src="weather_app.png" alt="profile" />
          </div>
          <div className="column right">
            <div className="project-info">
              <span className="project-number">04</span>
              <h3>Weather App</h3>
              <p className="project-desc">
                This project was created in week five of our bootcamp to practice our newly learnt skills such as React and API. As a team we decided to create this simple weather app which uses API from openweathermap.</p>
              <div className="project-stack">
                <span>React.js</span>
                <span>JavaScript</span>
                <span>CSS</span>
                <span>REST API</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/karishmapatel27/WhetherPerson" rel="noreferrer" target="_blank">
                  <FaGithubSquare className="project-icon" />
                </a>
                <a href="https://weather--app-2020.herokuapp.com/" rel="noreferrer" target="_blank" >
                  <FaShareSquare className="project-icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="project-content">
          <div className="column left">
            <img src="firstwebsite.png" alt="profile" />
          </div>
          <div className="column right">
            <div className="project-info">
              <span className="project-number">05</span>
              <h3>My First Website</h3>
              <p className="project-desc">
                My very first website! I built this site suring my bootcamp foundation using HTML and CSS. During development I realised it takes a lotmore then just writing code to create a functional and visualy aesthitic website. It was the beginin of a lifelong journey, and looking back I realise the progress I have made in a few short months. </p>
              <div className="project-stack">
                <span>HTML</span>
                <span>CSS</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/karishmapatel27/karishmapatel-myfirstwebsite" rel="noreferrer" target="_blank">
                  <FaGithubSquare className="project-icon" />
                </a>
                <a href="https://karishmapatel27.github.io/karishmapatel-myfirstwebsite/" rel="noreferrer" target="_blank" >
                  <FaShareSquare className="project-icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
