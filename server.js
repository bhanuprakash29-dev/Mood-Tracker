const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('./config/db'); // MongoDB connection

const studentRoutes = require('./routes/studentRoutes');
const busRoutes = require('./routes/busRoutes');
const paymentRoutes = require('./routes/paymentRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/students', studentRoutes);
app.use('/api/buses', busRoutes);
app.use('/api/payments', paymentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
