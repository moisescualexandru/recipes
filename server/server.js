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

// app routes
app.get('/', (req, res) => {
	let bestRatedRecipe, randomRecipe;
	models.recipes.find().where('rating').gt(4).lt(5).exec(() => {
		bestRatedRecipe = this.sort((recipeOne, recipeTwo) => (recipeOne.rating - recipeTwo.rating))[0];
	});
	if (!bestRatedRecipe) {
		randomRecipe = models.recipes.find()[0];
	}
	res.send({ recipe: bestRatedRecipe || randomRecipe });
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

// server initializations
app.listen(port, () => {
	console.log(`Server app listening at https://localhost:${port}`);
});