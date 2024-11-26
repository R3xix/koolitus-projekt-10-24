import React, { useRef } from 'react';

function Signup() {
    const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  return (
    <div>
        <div className="form-container"></div>
        <h2>Sign Up</h2>
      <form className="form">
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" ref={usernameRef} placeholder="Enter your username" />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" ref={emailRef} placeholder="Enter your email" />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" ref={passwordRef} placeholder="Enter your password" />
        </div>
        <div className="input-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword" ref={confirmPasswordRef} placeholder="Confirm your password" />
        </div>
        <button type="button" className="btn">Signup</button>
      </form>
    </div>
  )
}

export default Signup