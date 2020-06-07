const express = require('express');
const path = require('path');
var bodyParser = require('body-parser')
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/hnv_node_express', {useNewUrlParser: true, useUnifiedTopology: true});
let db = mongoose.connection;
// Check Connection
db.once('open', () => {
    console.log('Connected to MongoDB');
});
// Check for DB errors
db.on('error', (err) => {
    console.log(err);
});

const app = express();  // Init App

// Models
let Hero = require('./models/hero');

// View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false })) // parse application/x-www-form-urlencoded
app.use(bodyParser.json())  // parse application/json

// Home Route
app.get('/', (req, res) => {

    Hero.find({}, (err, heroes) => {
        if(err) {
            console.log(err);
        } else {
            res.render('index', {
                title: 'This is Heroes and Villains',
                heroes: heroes
            });
        }
    });

});

app.get('/heroes/add', (req, res) => {
    res.render('add_hero', {
        title: 'Add a Hero'
    });
});

// Store Hero Route
app.post('/heroes/add', (req, res) => {
    let hero = new Hero();  // Create instance of model class
    hero.hero = req.body.hero;
    hero.name = req.body.name;
    hero.body = req.body.body;
    hero.pic = req.body.pic;
    hero.cat = req.body.cat;

    hero.save((err) => {
        if(err) {
            console.log(err);
            return;
        } else {
            res.redirect('/');
        }
    });

    // console.log(req.body.hero);
    // return;
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Running on http://localhost:${PORT}`));  // Start Server
