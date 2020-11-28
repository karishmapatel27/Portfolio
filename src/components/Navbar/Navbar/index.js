import React, { useState, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, Img } from './NavbarElements'

const Navbar = ({ toggle }) => {
  const [navbar, setNavbar] = useState(false)
  const [logo, setLogo] = useState(false)

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true)
    }
    else {
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', changeBackground);

  const changeLogo = () => {
    if (window.scrollY >= 80) {
      setLogo(true)
    } else {
      setLogo(false)
    }
  }

  window.addEventListener('scroll', changeLogo)

  return (
    <>
      <Nav className={navbar ? "active" : ""}>
        <NavbarContainer>
          <NavLogo to='/'> <Img src={logo ? "white-logo.png" : "smll-logo.png"} alt="profile" /></NavLogo>
          <MobileIcon onClick={toggle} className={navbar ? "active" : ""}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="home" className={navbar ? "active" : ""} >HOME</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="about" className={navbar ? "active" : ""} >ABOUT</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="projects" className={navbar ? "active" : ""} >PROJECTS</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contact" className={navbar ? "active" : ""} >CONTACT</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar
