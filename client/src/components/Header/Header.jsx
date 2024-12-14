import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="../src/assets/images/logo.png" alt="DEEP NET SOFT Logo" />
      </div>
      <nav>
        <ul className="nav-menu">
          <li className='link-items'><Link to="/">Home</Link></li>
          <li className='link-items'><Link to="/menu">Menu</Link></li>
          <li>Make a Reservation</li>
          <li>Contact Us</li>
          <li className="link-items">
            <Link to="/create">Admin</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
