import React, { useEffect } from 'react';
import logo from '../img/logo.png'
import { Link } from "react-router-dom";
function Navbar() {
  useEffect(() => {
    const mobileMenu = () => {
      const menu = document.querySelector('#mobile-menu');
      const menuLinks = document.querySelector('.navbar__menu');
      menu.classList.toggle('is-active');
      menuLinks.classList.toggle('active');
      document.body.style.overflowX = menu.classList.contains('is-active') ? 'hidden' : 'auto';
    };

    const menu = document.querySelector('#mobile-menu');
    menu.addEventListener('click', mobileMenu);

    return () => {
      menu.removeEventListener('click', mobileMenu);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div id="navbar__logo">
          <div className="logo-holder logo-7" id="logo">
            <img className="flower" src={logo} alt="" />
          </div>
        </div>
        <div className="navbar__toggle" id="mobile-menu">
          <span className="bar"></span> <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className="navbar__menu">
        <li className="navbar__item">
            <Link to="">Order Now</Link>
          </li>
          <li className='navbar__item'>
            <Link to="/">Contact Us</Link>
          </li>
          <li className='navbar__item'>
            <Link to="/">Explore Our Beans</Link>
          </li>
          <li className="navbar__item">
            <Link to="/">Blogs</Link>
          </li>
          <li className='navbar__item'>
            <Link to="/">About</Link>
          </li>
          <li className='navbar__item'>
            <Link to="/">Home</Link>
          </li>





        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
