import React from 'react';
import HeaderDescription from './HeaderDescription';
import NavBar from './NavBar';
import image from '../../images/bg-tablet-pattern.svg';

const Header = () => {
  return (
    <div className="header">
      <div className="header-bg">
        <img src={image} alt="" />
      </div>
      <div className="innerHeader">
        <NavBar/>
        <HeaderDescription />
      </div>
    </div>
  );
};

export default Header;
