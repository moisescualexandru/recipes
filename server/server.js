const express = require('express');
const app = express();
const port = process.env.PORT || 3300;
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => {
    console.log(`Example app listening at https://localhost:${port}`);
});