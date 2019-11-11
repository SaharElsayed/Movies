import React from 'react';
import history from './../../app/history';
import './Logo.scss';

const Logo = () => {
  return (
    <div onClick={() => history.push('/')} className="logoWrapper">
      <img src='/assets/svgs/logo.svg' alt="logo" className="logoWrapper__img" />
    </div>
  )
}

export default Logo;