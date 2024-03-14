import React from 'react'
import style from "./navbar.css"

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <span className="app-name">Travel Blog</span>
      </div>
      <div className="navbar-right">
        <a href="#" className="navbar-link">Login</a>
        <a href="#" className="navbar-link">Sign Up</a>
      </div>
    </div>
  )
}

export default NavBar