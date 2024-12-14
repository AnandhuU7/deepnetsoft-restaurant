import React from 'react';
import './Footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-box">
          <h4>Connect with us</h4>
          <ul>
            <li><a href="tel:+919567843340"><i className="fas fa-phone"></i> +91 9567843340</a></li>
            <li><a href="mailto:info@deepnetsoft.com"><i className="fas fa-envelope"></i> info@deepnetsoft.com</a></li>
          </ul>
        </div>
        <div className="footer-box text-center">
          <img src="../../src/assets/images/logo.png" alt="Deep Net Soft Logo" />
        </div>
        <div className="footer-box">
          <h4>Find us</h4>
          <p>First floor, Gen ictspark, Infopark EXPY, Kakkanad</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
