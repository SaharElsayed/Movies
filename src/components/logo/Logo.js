import React from 'react';
import history from './../../app/history';
import logo from './../../assets/svgs/logo.svg';
import './Logo.scss';

const Logo = () => {
  return (
    <div onClick={() => history.push('/')} className="logoWrapper">
      <img src={logo} alt="logo" className="logoWrapper__img" />
    </div>
  )
}

export default Logo;