const mongoose = require('mongoose');

const recipe = new mongoose.Schema({
	id: String,
	name: String,
	picture: String,
	ingredients: Array
});

module.exports = {
	recipe: recipe
};