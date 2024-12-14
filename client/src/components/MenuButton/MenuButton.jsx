import React from 'react';
import './MenuButton.css';

const MenuButtons = () => {
  return (
    <div className="menu-buttons">
    <button>Food</button>
    <button className="drinks-button">Drinks</button> {/* Drinks button with specific styles */}
    <button>Brunch</button>
  </div>
  
  );
};

export default MenuButtons;
