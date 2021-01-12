const mongoose = require('mongoose');

const ingredient = new mongoose.Schema({
	name: String,
	category: String
});

const ingredientWithQty = new mongoose.Schema({
	type: ingredient,
	quantity: String
});

const recipe = new mongoose.Schema({
	id: String,
	name: String,
	picture: String,
	category: String,
	rating: Number,
	ingredients: [ingredientWithQty]
});

module.exports = {
	recipe: recipe,
	ingredient: ingredient
};