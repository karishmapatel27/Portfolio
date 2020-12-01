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
                GiveMe is the final project that I created with an exceptional team and presented at our Bootcamp's graduation. As a team, we created a platform that enables kiwis to donate unwanted goods. User can list unwanted items and person interested in that item can then get the contact details of the product owner.</p>
              <div className="project-stack">
                <span>React</span>
                <span>React hooks</span>
                <span>React Context</span>
                <span>JavaScript</span>
                <span>HTML</span>
                <span>CSS</span>
                <span>Authenticare</span>
                <span>SQLite3</span>
                <span>Knex.js</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/karishmapatel27/GiveMe" rel="noreferrer" target="_blank">
                  <FaGithubSquare className="project-icon" />
                </a>
                <a href="https://drive.google.com/drive/u/0/folders/1f3TY8kDdCTzc9HU-e31EpgbQG21L4ita">
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
                TellStory is a simple and entertaining story generator game, based on an Idea given by our awesome team member. We created this game on the last day of week three of our Bootcamp. <br /><br />
                We created this game to practise newly learnt skills within the dev environment. It takes an input, stores it in a database table, then display the last input while also recording the new input. It then merges all the inputs to generate the story.</p><br />
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
                The Meme Generator, project we created during week five of our bootcamp.</p>
              <div className="project-stack">
                <span>React</span>
                <span>React hooks</span>
                <span>JavaScript</span>
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
            <img src="meme-generator.png" alt="profile" />
          </div>
          <div className="column right">
            <div className="project-info">
              <span className="project-number">04</span>
              <h3>WhetherPerson</h3>
              <p className="project-desc">
                The Meme Generator, project we created during week five of our bootcamp.</p>
              <div className="project-stack">
                <span>React</span>
                <span>React hooks</span>
                <span>JavaScript</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/karishmapatel27/WhetherPerson" rel="noreferrer" target="_blank">
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
            <img src="netflix-clone.png" alt="profile" />
          </div>
          <div className="column right">
            <div className="project-info">
              <span className="project-number">05</span>
              <h3>Netflix Clone</h3>
              <p className="project-desc">
                The Meme Generator, project we created during week five of our bootcamp.</p>
              <div className="project-stack">
                <span>React</span>
                <span>React hooks</span>
                <span>JavaScript</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/karishmapatel27/netflix_clone" rel="noreferrer" target="_blank">
                  <FaGithubSquare className="project-icon" />
                </a>
                <a href="https://react-meme-builder.netlify.app/#/" rel="noreferrer" target="_blank" >
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
