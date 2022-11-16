const express = require('express');
require('dotenv').config();

const studentRoutes = require('./routes/studentRoutes');

const app = express();

app.use('/api/students',studentRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} mode port ${PORT}`));
