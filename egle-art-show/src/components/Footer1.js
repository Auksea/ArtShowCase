import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer1.css';

const Footer1 = () => {
  return (
    <footer className="footer-container">
      <div className="contact-info">
        <h5>Contact Us</h5>
        <p>Email: example@example.com</p>
      </div>
      <div className="social-icons">
        <a href="https://www.facebook.com">
          <FontAwesomeIcon icon={faFacebook} className="icon facebook-icon" />
        </a>
        <a href="https://www.twitter.com">
          <FontAwesomeIcon icon={faTwitter} className="icon twitter-icon" />
        </a>
        <a href="https://www.instagram.com">
          <FontAwesomeIcon icon={faInstagram} className="icon instagram-icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer1;


