import React from 'react'
import "./signup.css"

const SignUp = () => {
  return (
    <div className="form-container">
        <h1>Sign Up</h1>
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
            <button type="submit">Sign Up</button>
            <p>Already have an account? <a href="/login">Log In</a> here.</p>
      </form>
    </div>
  )
}

export default SignUp