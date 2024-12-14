import React from 'react';
import './Footer2.css'; // Import the CSS file

function Footer2() {
  return (
    <footer className="footer">
      <div className="copyright">
        © 2023 Company Name. All rights reserved.
      </div>
      <div className="links">
        <a href="#">Terms & Conditions</a>
        <span> | </span>
        <a href="#">Privacy Policy</a>
      </div>
    </footer>
  );
}

export default Footer2;