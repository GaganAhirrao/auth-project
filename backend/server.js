require('dotenv').config({ path: '../.env' });
const express = require('express');
const connectDB = require('./config/db'); 
const authRoutes = require('./routes/auth');

const app = express();
connectDB(); // Connect to the database

app.use(express.json()); // Middleware to parse JSON

// Use authentication routes
app.use('/api/auth', authRoutes);

// Define your port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
