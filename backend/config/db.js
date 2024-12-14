const mongoose = require('mongoose');
const connectDB = async () => {
    try {
        const dbUri = `mongodb+srv://user:${process.env.MONGODB_PASSWORD}@cluster0.rgdjq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
        await mongoose.connect(dbUri);
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Failed to connect to MongoDB', err);
        process.exit(1); 
    }
};

module.exports = connectDB;
