import React from 'react'
import "./navbar.css"

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <a className="app-name navbar-link" href="/">Travel Blog</a>
      </div>
      <div className="navbar-right">
        <a href="/login" className="navbar-link">Log In</a>
        <a href="/signup" className="navbar-link">Sign Up</a>
      </div>
    </div>
  )
}

export default NavBar