const express = require('express');
const router = express.Router();

// Define a route to handle GET requests
router.get('/api/submitForm', (req, res) => {
  res.json({ message: 'Data fetched successfully' });
});

module.exports = router;
