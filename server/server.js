const express = require('express');
const app = express();
const port = process.env.PORT || 3300;
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/serach/recipes', (req, res) => {
    res.send('recipes');
});

app.post('/login', (req, res) => {
    res.send('success');
});

req.post('/recipe', (req, res) => {
    res.send('success');
});

app.listen(port, () => {
    console.log(`Example app listening at https://localhost:${port}`);
});