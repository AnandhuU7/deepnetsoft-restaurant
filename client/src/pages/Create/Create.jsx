import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Create.css';

function Create() {
  const [menus, setMenus] = useState([]);
  const [menuName, setMenuName] = useState('');
  const [menuDescription, setMenuDescription] = useState('');
  const [selectedMenu, setSelectedMenu] = useState('');
  const [menuItemName, setMenuItemName] = useState('');
  const [menuItemDescription, setMenuItemDescription] = useState('');
  const [menuItemPrice, setMenuItemPrice] = useState('');

  console.log('menus', menus);

  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const response = await axios.get('https://deepnetsoft-restaurant.onrender.com/menus');
        setMenus(response.data.menus); 
      } catch (error) {
        console.error('Error fetching menus:', error);
        alert('Failed to fetch menus. Please try again.');
      }
    };

    fetchMenus();
  }, []); 

  const handleCreateMenu = async () => {
    if (menuName && menuDescription) {
      try {
        const response = await axios.post('https://deepnetsoft-restaurant.onrender.com/menus/create', {
          name: menuName,
          description: menuDescription,
        });

        setMenus([...menus, { name: menuName, description: menuDescription }]);
        setMenuName('');
        setMenuDescription('');

        alert(`Menu Created Successfully: ${response.data.message || 'Success'}`);
      } catch (error) {
        console.error('Error creating menu:', error);
        alert('Failed to create menu. Please try again.');
      }
    } else {
      alert('Please fill out both fields.');
    }
  };

  const handleCreateMenuItem = async () => {
    if (selectedMenu && menuItemName && menuItemDescription && menuItemPrice) {
      try {
        const response = await axios.post('https://deepnetsoft-restaurant.onrender.com/menus/menuitem/create', {
          name: menuItemName,
          description: menuItemDescription,
          price: parseFloat(menuItemPrice),
          menu: selectedMenu,
        });

        alert(`Menu Item Created Successfully: ${response.data.message || 'Success'}`);

        setMenuItemName('');
        setMenuItemDescription('');
        setMenuItemPrice('');
      } catch (error) {
        console.error('Error creating menu item:', error);
        alert('Failed to create menu item. Please try again.');
      }
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <div className="create-page">
      <div className="create-section">
        <h2>Create Menu</h2>
        <input
          type="text"
          placeholder="Menu Name"
          value={menuName}
          onChange={(e) => setMenuName(e.target.value)}
          className="input-field"
        />
        <textarea
          placeholder="Menu Description"
          value={menuDescription}
          onChange={(e) => setMenuDescription(e.target.value)}
          className="textarea-field"
        ></textarea>
        <button onClick={handleCreateMenu} className="button">
          Create Menu
        </button>
      </div>

      <div className="create-section">
        <h2>Create Menu Item</h2>
        <select
          value={selectedMenu}
          onChange={(e) => setSelectedMenu(e.target.value)}
          className="select-field"
        >
          <option value="" disabled>
            Select Menu
          </option>
          {menus.map((menu, index) => (
            <option key={index} value={menu._id}>
              {menu.name}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Menu Item Name"
          value={menuItemName}
          onChange={(e) => setMenuItemName(e.target.value)}
          className="input-field"
        />
        <textarea
          placeholder="Menu Item Description"
          value={menuItemDescription}
          onChange={(e) => setMenuItemDescription(e.target.value)}
          className="textarea-field"
        ></textarea>
        <input
          type="number"
          placeholder="Price"
          value={menuItemPrice}
          onChange={(e) => setMenuItemPrice(e.target.value)}
          className="input-field"
        />
        <button onClick={handleCreateMenuItem} className="button">
          Create Menu Item
        </button>
      </div>
    </div>
  );
}

export default Create;
