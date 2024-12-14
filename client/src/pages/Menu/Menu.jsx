import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Menu.css';

const Menu = () => {
  const [menus, setMenus] = useState([]);
  const [selectedMenu, setSelectedMenu] = useState(null); // Track selected menu
  const [menuItems, setMenuItems] = useState([]); // Track menu items

  // Fetch menus when the component mounts
  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const response = await axios.get('https://deepnetsoft-restaurant.onrender.com/menus');
        setMenus(response.data.menus); // Save the fetched menus to state

        // If menus exist, set the first menu as the default selected menu and fetch its items
        if (response.data.menus.length > 0) {
          const firstMenu = response.data.menus[0];
          setSelectedMenu(firstMenu._id); // Set the first menu as selected
          fetchMenuItems(firstMenu._id); // Fetch menu items for the first menu
        }
      } catch (error) {
        console.error('Error fetching menus:', error);
        alert('Failed to fetch menus. Please try again.');
      }
    };

    fetchMenus(); // Call the function
  }, []);

  // Fetch menu items for a selected menu
  const fetchMenuItems = async (menuId) => {
    try {
      const response = await axios.get(`https://deepnetsoft-restaurant.onrender.com/menus/${menuId}`);
      setMenuItems(response.data.menuItems); // Save menu items to state
    } catch (error) {
      console.error('Error fetching menu items:', error);
      alert('Failed to fetch menu items. Please try again.');
    }
  };

  // Handle menu click to fetch respective menu items
  const handleMenuClick = (menuId) => {
    setSelectedMenu(menuId); // Update selected menu
    fetchMenuItems(menuId); // Fetch menu items for the selected menu
  };

  return (
    <div className="menu-container">
      <h2 className="menu-heading">Menus</h2>
      <div className="menu-list">
        {menus.map((menu) => (
          <div
            key={menu._id}
            onClick={() => handleMenuClick(menu._id)} // Handle click on menu
            className={`menu-card ${selectedMenu === menu._id ? 'selected' : ''}`}
          >
            <h3>{menu.name}</h3>
          </div>
        ))}
      </div>

      {selectedMenu && menuItems.length > 0 && (
        <div className="menu-items-container">
          <h3 className="menu-items-heading">Menu Items</h3>
          <ul className="menu-items-list">
            {menuItems.map((item) => (
              <li key={item._id} className="menu-item">
                <div className="menu-item-card">
                  <h4>{item.name}</h4>
                  <p>{item.description}</p>
                  <strong>${item.price}</strong>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Menu;
