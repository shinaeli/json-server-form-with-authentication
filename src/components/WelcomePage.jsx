import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Footer from './Footer'

const WelcomePage = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [showClose, setShowClose] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);

  const handleClose = () => {
    setShowMenu(true);
    setShowMobileNav(false);
    setShowClose(false);
  }

  const handleHamburger = () => {
    setShowMenu(false);
    setShowMobileNav(true);
    setShowClose(true);
  }

  return (
    <div>
      <header>
        <div className="navigation">
          <div className="main-title">
            <h1 className="logo">Grey<span>Haze</span></h1>
          </div>
          <nav>
            <ul>
              <li>
                <NavLink to="/welcome">Home</NavLink>
              </li>
              <li>
                <NavLink to="/welcome">Our Services</NavLink>
              </li>
              <li>
                <NavLink to="/welcome">About Us</NavLink>
              </li>
              <li>
                <NavLink to="/welcome">Latest News</NavLink>
              </li>
              <li>
                <NavLink to="/sign-in">Sign Out</NavLink>
              </li>
            </ul>
          </nav>
          {showMobileNav && (<nav className="mobile-nav">
            <ul>
              <li>
                <NavLink to="/welcome">Home</NavLink>
              </li>
              <li>
                <NavLink to="/welcome">Our Services</NavLink>
              </li>
              <li>
                <NavLink to="/welcome">About Us</NavLink>
              </li>
              <li>
                <NavLink to="/welcome">Latest News</NavLink>
              </li>
              <li>
                <NavLink to="/sign-in">Sign Out</NavLink>
              </li>
            </ul>
          </nav>)}
          {showMenu && (<div className="hamburger" onClick={handleHamburger}>
            <img src="icons/hamburger-menu-svgrepo-com.svg" alt="hamburger menu" />
          </div>)}        
          {showClose && (<div className="close" onClick={handleClose}>
            <img src="icons/close-svgrepo-com.svg" alt="close menu" />
          </div>)}        
        </div>
        <div className="content">
            <h1 className="interested">Are you interested?</h1>
            <h3 className="book-spot">Use this theme to design your website and book a spot now!</h3>
            <button className="read-more">READ MORE</button>
        </div>
      </header>
      <Footer />
    </div>
  )
}

export default WelcomePage