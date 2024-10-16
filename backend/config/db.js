require('dotenv').config({ path: '../../.env' });
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        console.log('MongoDB URI:', process.env.MONGO_URI); 
        await mongoose.connect(process.env.MONGO_URI); 
        console.log('MongoDB Connected');
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
        process.exit(1);  
    }
};

module.exports = connectDB;
