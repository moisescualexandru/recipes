const mongoose = require('mongoose');
const schemas = require('../schemas/schemas');

const recipes = mongoose.model('Recipes', schemas.recipe);

module.exports = recipes;