const express = require('express');
const jwt = require('jsonwebtoken');
const { createMenu ,getMenus } = require('../controllers/menuController');
const { createMenuItem, getMenuItemsByMenuId } = require('../controllers/menuItemController');
const Menu = require('../models/Menu');
const MenuItem = require('../models/MenuItem');

const router = express.Router();
const protectAdmin = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'No token provided, access denied' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (decoded.role !== 'admin') {
            return res.status(403).json({ message: 'Forbidden: You do not have admin rights' });
        }
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token, access denied' });
    }
};

router.post('/create', createMenu);
router.post('/menuitem/create', createMenuItem);
router.get('/:menuId', getMenuItemsByMenuId);
router.get('/', getMenus);

module.exports = router;
