const MenuItem = require('../models/MenuItem');
const Menu = require('../models/Menu');
const mongoose = require('mongoose');

const createMenuItem = async (req, res) => {
    const { name, description, price, menu } = req.body;

    // Validate menu ID
    if (!mongoose.isValidObjectId(menu)) {
        return res.status(400).json({ message: 'Invalid menu ID' });
    }

    try {
        const existingMenu = await Menu.findById(menu);
        if (!existingMenu) {
            return res.status(404).json({ message: 'Menu with the provided ID does not exist' });
        }

        const menuItem = new MenuItem({ name, description, price, menu });
        await menuItem.save();
        return res.status(201).json({ menuItem });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

const getMenuItemsByMenuId = async (req, res) => {
    const { menuId } = req.params;
    try {
        const menuItems = await MenuItem.find({ menu: menuId });
        if (menuItems.length === 0) {
            return res.status(404).json({ message: 'No menu items found for this menu' });
        }
        return res.status(200).json({ menuItems });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = { createMenuItem, getMenuItemsByMenuId };
