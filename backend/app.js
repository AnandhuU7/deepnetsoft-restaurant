require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const menuRoutes = require('./routes/menuRoutes');
const bodyParser = require('body-parser');


connectDB();

const app = express();


app.use(
  cors({
      origin: 'https://lovely-biscuit-d25443.netlify.app',
      methods: 'GET,POST,PUT,DELETE',
      allowedHeaders: 'Content-Type,Authorization',
  })
);


app.use(bodyParser.json());


app.use('/auth', authRoutes);
app.use('/menus', menuRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


process.on('SIGINT', () => {
    mongoose.connection.close(() => {
        console.log('MongoDB connection closed due to app termination');
        process.exit(0);
    });
});
