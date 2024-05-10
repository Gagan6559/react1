const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const router = require('./router'); // Assuming your router file is named router.js

const app = express();
const PORT = 5000;

// Middleware to parse JSON and URL-encoded request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MySQL connection pool configuration
const pool = mysql.createPool({
  host: 'localhost',
  user: 'gogarage_leadform',
  password: 'Lead1',
  database: 'gogarage_leadform',
});

// Mount the router
app.use('/', router);

// Define a POST endpoint to handle form submissions
app.post('/api/submitForm', (req, res) => {
  // Extract form data from the request body
  const formData = req.body;

  // Define the SQL query to insert form data
  const query = 'INSERT INTO `Lead` (`name`, `email`, `contactNumber`, `carMake`, `carModel`, `fuelType`, `city`) VALUES (?, ?, ?, ?, ?, ?, ?)';

  // Insert the form data into the database
  pool.query(query, [formData.name, formData.email, formData.contactNumber, formData.carMake, formData.carModel, formData.fuelType, formData.city], (err, result) => {
    if (err) {
      console.error('Error executing SQL query:', err.sqlMessage);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    console.log('Form data stored in database:', result);
    res.json({ message: 'Form data received and stored successfully' });
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
