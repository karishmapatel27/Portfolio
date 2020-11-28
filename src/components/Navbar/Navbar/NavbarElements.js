import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'
import { FaBars } from 'react-icons/fa'

export const Nav = styled.nav`
  background: white;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky; 
  padding: 50px 0;
  top: 0;
  z-index: 10;
  transition: 0.9s all ease;
  
  @media screen and (max-width: 960px){
    transition: 0.9s all ease;
  }

  &.active{
      padding: 50px 0 60px 0;
      background: #111;
      opacity: 0.9;
    }
`

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1300px;
`

export const NavLogo = styled(LinkR)`
  justify-self: flex-start;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-left: 10px;
  margin-top: 2.5%;
`

export const Img = styled.img`
  width: 190px;
`

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px){
    display: block;
    position: absolute;
    top: 13.5px;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #111;
  }

  &.active{
    color: #fff;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px){
    display: none; 
  }

`

export const NavItem = styled.li`
  height: 80px;
`

export const NavLinks = styled(LinkS)`
    color: #111;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1.5rem;
    height: 100%;
    cursor: pointer; 
    font-weight: lighter;

    &:hover {
      color: #DE0013;
      transition: 0.7s all ease;
    }

    &.active {
      color: white;

      &:hover{
        color: #DE0013;
      }
    }
  `






