const express = require('express');
const dotenv = require('dotenv');
const { connectDB } = require('./config/db');  // No need to import sequelize here

dotenv.config();

// Check if environment variables are loaded correctly
console.log('Loaded Environment Variables:');
console.log('MYSQL_HOST:', process.env.MYSQL_HOST);
console.log('MYSQL_DB:', process.env.MYSQL_DB);
console.log('MYSQL_USER:', process.env.MYSQL_USER);

// Connect to MySQL
connectDB();

const app = express();
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  console.log('GET / request received');
  res.send('Home Automation API is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
