const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
    },
    menuItems: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MenuItem',
    }]
});

const Menu = mongoose.model('Menu', menuSchema);
module.exports = Menu;
