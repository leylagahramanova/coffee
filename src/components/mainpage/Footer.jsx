import React from 'react';
import logo from '../../img/logo.png';
import { FaFacebook, FaTwitter, FaInstagram, FaGoogle, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="grid-container">
        <div className="logo">
          <img src={logo} alt="Logo"/>
          <p>JavaJolt Roasters</p>
          <div className="footer-icons">
            <a href="#" style={iconStyle}><FaFacebook/></a>
            <a href="#" style={iconStyle}><FaTwitter/></a>
            <a href="#" style={iconStyle}><FaInstagram/></a>
            <a href="#" style={iconStyle}><FaGoogle/></a>
            <a href="#" style={iconStyle}><FaYoutube/></a>
          </div>
        </div>
        <div className="footer-info">
          <h3>Contact</h3>
          <div className='info'>
            <i className="fa fa-map-marker"></i>
            <p>4140 Parker Rd.<br/> Allentown, New<br/> Mexico 31134</p>

            <i className="fa fa-phone"></i>
            <p>(319) 555-0115</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const iconStyle = {
  display: 'inline-block',
  width: '35px',
  height: '35px',
  cursor: 'pointer',
  backgroundColor: '#33383b',
  borderRadius: '2px',
  fontSize: '20px',
  color: '#ffffff',
  textAlign: 'center',
  lineHeight: '35px',
  marginRight: '3px',
  marginBottom: '5px'
};

export default Footer;
