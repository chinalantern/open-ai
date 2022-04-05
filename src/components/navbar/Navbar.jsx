import React, { useState } from 'react'
import './Navbar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/logo.svg'


const MenuLinks = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#wgpt3">What is GPT3?</a>
    </p>
    <p>
      <a href="#possibility">Open AI</a>
    </p>
    <p>
      <a href="#features">Case Studies</a>
    </p>
    <p>
      <a href="#blog">Libraries</a>
    </p>
  </>
)

const Navbar = () => {

  const [mobileMenu, setMobileMenu] = useState(false)

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <MenuLinks />
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign In</p>
        <button type="button">Sign Up</button>
      </div>

      {/* Mobile Device */}
      <div className="gpt3__navbar-menu">
      
        {mobileMenu ? 
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setMobileMenu(!mobileMenu)}
          />
         :           <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setMobileMenu(!mobileMenu)}
          />
        }

        {mobileMenu && (
          <div className="gpt3__navbar-menu_container scale-up-ver-top">
            <div className="gpt3__navbar-menu_container-links">
              <MenuLinks />
            </div>
              <div className="gpt3__navbar-menu_container-links-sign">
                <p>Sign In</p>
                <button type="button">Sign Up</button>
              </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
