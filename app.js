const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const quotes= require('./quotes.json');


app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/quotes', (req, res) => {
    res.json(quotes);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`)
});