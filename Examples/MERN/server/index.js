const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const logger = require('morgan');

const app = express();
const env = require('./env');
const drinksController = require('./sandbox/controllers/drinks.controller');
const categoryController = require('./sandbox/controllers/category.controller');
mongoose.connect(env.db.connectionString);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


//Routes
app.use('/drinks', drinksController);
app.use('/categories', categoryController);


app.listen('8081', () => {
    console.log("Server is running on localhost:8081");
})