const express = require('express');
require('dotenv').config();
const sequelize = require('./utils/database');

require('./models/studentModel');

const studentRoutes = require('./routes/studentRoutes');

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  req.hello = 'hello world';

  next();
});

app.use('/api/students', studentRoutes);

const PORT = process.env.PORT || 5000;

sequelize
  .authenticate()
  .then(() => {
    sequelize.sync().then(() => {
      console.log('database berhasil disambungkan');
      app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} mode port ${PORT}`));
    });
  })
  .catch(() => {
    console.log('database gagal disambungkan');
  });
