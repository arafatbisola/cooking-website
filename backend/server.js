const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static('public'));

// Define routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/subpage1', (req, res) => {
    res.sendFile(__dirname + '/subpage1.html');
});

// Search route
app.get('/search', (req, res) => {
    const searchTerm = req.query.term; // Retrieve the search term from the query string
    // Implement logic to search for recipes based on searchTerm
    // Send back the matching results as JSON
    res.json({ results: ['Recipe 1', 'Recipe 2', 'Recipe 3'] }); // Example response
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
