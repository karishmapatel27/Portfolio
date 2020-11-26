import React, { useState, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, Span } from './NavbarElements'

const Navbar = ({ toggle }) => {
  const [navbar, setNavbar] = useState(false)

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true)
    }
    else {
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', changeBackground);

  return (
    <>
      <Nav className={navbar ? "active" : ""}>
        <NavbarContainer>
          <NavLogo to='/'>Portfo<Span className={navbar ? "active" : ""}>lio.</Span></NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="home" >Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="about" >About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="projects" >Projects</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contact" >Contact</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar
