import React from 'react'
import { FaBars } from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, Span } from './NavbarElements'

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>Portfo<Span>lio.</Span></NavLogo>
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
