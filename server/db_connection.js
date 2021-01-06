//connecting to db
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/devdb', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error with the db'));
db.once('open', () => { console.log('Connection to db successfull') });