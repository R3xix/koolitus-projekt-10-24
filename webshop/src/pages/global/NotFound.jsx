import React from 'react'
import { Link } from 'react-router-dom';


function NotFound() {
    

  return (
    <div
      style={{
        textAlign: 'center',
        padding: '50px',
        fontFamily: 'Arial, sans-serif',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f0f0f0',
      }}
    >
      <div
        style={{
          textAlign: 'center',
          padding: '40px',
          backgroundColor: '#fff',
          borderRadius: '20px',
          boxShadow: '0 0 15px red',
        }}
      >
        <h1
          style={{
            fontSize: '72px',
            color: '#ff6b6b',
            marginBottom: '20px',
          }}
        >
          404
        </h1>
        <p
          style={{
            fontSize: '24px',
            color: '#333',
            marginBottom: '30px',
          }}
        >
          Oops! The page you are looking for does not exist.
        </p>
        <Link
          to="/" style={{
            display: 'inline-block',
            padding: '10px 20px',
            fontSize: '18px',
            color: '#fff',
            backgroundColor: '#1e90ff',
            textDecoration: 'none',
            borderRadius: '5px',
            transition: 'background-color 0.3s',
          }}
          
        >
          Go Back Home
        </Link>
      </div>
    </div>

  )
}

export default NotFound