import React from 'react'
import './Header.css';
import logo from '../../assets/logo.png';

const Header = () => {
  return (
    <div className='header'>
        {/* logo */}
        <img className='logo' src={logo} alt="" />

        {/* manu */}
        <ul className='header-manu'>
          <li>Home</li>
          <li>Programs</li>
          <li>Why us</li>
          <li>Plans</li>
          <li>Testimonials</li>
        </ul>
    </div>
  )
}

export default Header