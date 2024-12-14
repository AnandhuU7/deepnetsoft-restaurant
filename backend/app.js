require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const menuRoutes = require('./routes/menuRoutes');
const bodyParser = require('body-parser');

// Connect to the database
connectDB();

const app = express();

// CORS configuration
app.use(
  cors({
    origin: [process.env.FRONTEND_URL, 'https://transcendent-cat-7606e9.netlify.app'], // Allow local and deployed frontend
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
  })
);

// Middleware to parse JSON
app.use(bodyParser.json());

// Routes
app.use('/auth', authRoutes);
app.use('/menus', menuRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Gracefully close the database connection on termination
process.on('SIGINT', () => {
    mongoose.connection.close(() => {
        console.log('MongoDB connection closed due to app termination');
        process.exit(0);
    });
});
