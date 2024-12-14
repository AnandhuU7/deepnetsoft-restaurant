const Menu = require('../models/Menu');

const createMenu = async (req, res) => {
    const { name, description } = req.body;
    try {
        const existingMenu = await Menu.findOne({ name });
        if (existingMenu) {
            return res.status(400).json({ message: 'Menu with this name already exists' });
        }
        const menu = new Menu({ name, description });
        await menu.save();
        res.status(201).json({ menu });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

const getMenus = async (req,res) => {
    try{
        const menus=await Menu.find();
        if(menus.length===0){
            return res.status(404).json({message:'No menus found'});
    }
    res.status(200).json({menus});
}
    catch(error){
        res.status(500).json({message:'Internal server error'});
    }
};

module.exports = { createMenu, getMenus};
