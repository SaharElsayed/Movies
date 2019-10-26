import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.scss';

const Logo = () => {
  return (
    <Link to='/' className="logoWrapper">
      <img src='/assets/svgs/logo.svg' alt="logo" className="logoWrapper__img" />
    </Link>
  )
}

export default Logo;