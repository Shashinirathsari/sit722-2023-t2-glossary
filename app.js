// app.js
const express = require('express');
const path = require('path');
const fs = require('fs');
const ejs = require('ejs');
const app = express();
const port = 3000;

// Set up a static directory to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Require the glossary data from index.js
const glossary = require('./index');

// Set up a route to handle requests for the root URL
app.get('/', (req, res) => {
  const htmlFilePath = path.join(__dirname, 'views', 'index.ejs');
  const template = fs.readFileSync(htmlFilePath, 'utf-8');

  // Render the EJS template with the glossary data
  const renderedTemplate = ejs.render(template, { glossary });
  res.send(renderedTemplate);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
