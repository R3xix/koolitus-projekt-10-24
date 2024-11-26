import React, { useRef } from 'react';


function Login() {
  const usernameRef = useRef();
  const passwordRef = useRef();
  
  return (
    <div className="form-container">
    <h2>Log In</h2>
    <form className="form">
      <div className="input-group">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" ref={usernameRef} placeholder="Enter your username" />
      </div>
      <div className="input-group">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" ref={passwordRef} placeholder="Enter your password" />
      </div>
      <button type="button" className="btn">Login</button>
    </form>
  </div>
  )
}

export default Login