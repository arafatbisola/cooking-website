// api.js

// Importing required modules
const express = require('express');

// Creating an Express application
const app = express();

// Define a basic route
app.get('/', (req, res) => {
  res.send('Welcome to the Blog API!');
});

// Define other routes here...

// Start the server
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
