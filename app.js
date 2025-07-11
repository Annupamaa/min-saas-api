const express = require('express');
require('dotenv').config();
const connectDB = require('./config/db');

const userRoutes = require('./routes/userRoutes');
const dealRoutes = require('./routes/dealRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();
app.use(express.json());


app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use('/api', dealRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
