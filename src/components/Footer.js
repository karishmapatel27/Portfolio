import React from 'react'
import {
  FaLinkedin
} from "react-icons/fa"
import { GoMarkGithub } from 'react-icons/go'

const Footer = () => {
  return (
    <>
      <div className="line"></div>
      <footer>

        <div className="social-media-links">
          <a href="https://www.linkedin.com/in/karishma-patel27/"
            className="social-link" rel="noreferrer" target="_blank">
            <FaLinkedin />
          </a>
          <a href="https://github.com/karishmapatel27"
            className="social-link" rel="noreferrer" target="_blank">
            <GoMarkGithub />
          </a>
        </div>
        <span>Created by <span className="footer-name">Karishma Patel</span> | <span className="far fa-copyright"></span> 2020 All rights reserved.</span>
      </footer>
    </>
  )
}

export default Footer
