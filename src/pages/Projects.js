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
            <img src="tell-story.png" alt="profile" />
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
      </div>
    </section>
  )
}

export default Projects
