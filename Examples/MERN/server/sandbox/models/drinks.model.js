const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const drink = new Schema({
    name: {
        type: String,
        required: true,
        maxlength: 25,
        minlength: 4,
        unique: true
    },
    size: {
        type: String,
        enum: ['tail', 'grande', 'venti']
    },
    price: {
        type: Number,
        required: true,
        max: 100,
        min: 0
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    }
});

module.exports = mongoose.model('Drink', drink);