import React from 'react'
import "./signup.css"

const LogIn = () => {
  return (
    <div className="form-container">
        <h1>Log In</h1>
        <form className="signup-form">
            <input
            type="email"
            name="email"
            placeholder="Email"
            required
            />
            <input
            type="password"
            name="password"
            placeholder="Password"
            required
            />
            <button type="submit">Log In</button>
            <p>Don't have an account? <a href="/signup">Sign Up</a> here.</p>
      </form>
    </div>
  )
}

export default LogIn