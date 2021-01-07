const mongoose = require('mongoose');

const ingredient = new mongoose.Schema({
	name: String
});

const ingredientWithQty = new mongoose.Schema({
	name: ingredient,
	quantity: String
});

const recipe = new mongoose.Schema({
	id: String,
	name: String,
	picture: String,
	ingredients: [ingredientWithQty]
});

module.exports = {
	recipe: recipe,
	ingredient: ingredient
};