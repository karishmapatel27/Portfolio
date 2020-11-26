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
            <img src="give-me.png" alt="profile" />
          </div>
          <div className="column right">
            <div className="project-info">
              <span className="project-number">01</span>
              <h3>Give Me</h3>
              <p className="project-desc">
                Give me is a platform that enables kiwis to list the unwanted items that they wish to donate.</p>
              <div className="project-stack">
                <span>React</span>
                <span>React hooks</span>
                <span>JavaScript</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/karishmapatel27/GiveMe" rel="noreferrer" target="_blank">
                  <FaGithubSquare className="project-icon" />
                </a>
                <a href="https://github.com/karishmapatel27/GiveMe">
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
                Tell Story is a project inspired by game mad libs.</p>
              <div className="project-stack">
                <span>React</span>
                <span>React hooks</span>
                <span>JavaScript</span>
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
