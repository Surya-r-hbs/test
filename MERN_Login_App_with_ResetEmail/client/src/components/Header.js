import React from 'react';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <>
      <header>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <h1>Hostel Buddies</h1>
      </header>
      <br />
    </>
  )
}

export default Header