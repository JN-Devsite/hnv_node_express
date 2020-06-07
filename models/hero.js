let mongoose = require('mongoose');
// Hero Schema
let heroSchema = mongoose.Schema({
    hero: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    pic: {
        type: String,
        required: true
    },
    cat: {
        type: String,
        required: true
    }
});

let Hero = module.exports = mongoose.model('Hero', heroSchema, 'heroes');
