// app.js
const express = require('express');
const app = express();
const port = 3000;

// Define a simple health check route
app.get('/health', (req, res) => {
  res.status(200).send('Healthy nagaraju');
});

// Start the application
app.listen(port, () => {
  console.log(`Demo app listening at http://localhost:${port}`);
});

