import React from 'react'
import { Link } from 'react-router-dom'

const Error = ({ errorMessage }) => {
  return (
    <div className="error-container">
        <h1>Oops!</h1>
        <h2>404 - PAGE NOT FOUND</h2>
        <h3>{errorMessage}</h3>
        <p>The page you are looking for is temporarily unavailable due to an eror in your network connection. Please, check your network configuration.</p>
        <Link to="/" className="back-home-btn">GO TO HOMEPAGE</Link>
    </div>
  )
}

export default Error