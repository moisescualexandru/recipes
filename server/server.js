const express = require('express');
const port = process.env.PORT || 3300;
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const upload = multer();
const app = express();
require('./db_connection');
const models = require('./models/models');

// for parsing application/json
app.use(bodyParser.json());

// for parsing application/xwww-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// for parsing multipart/form-data
app.use(upload.array());

// for sending and catching cookies
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/serach/recipes', (req, res) => {
    res.send('recipes');
});

app.post('/login', (req, res) => {
    res.send('success');
});

app.post('/recipe', (req, res) => {
    res.send('success');
});

app.post('/new-ingredient', (req, res) => {
    res.send('success');
});

app.listen(port, () => {
    console.log(`Server app listening at https://localhost:${port}`);
});