const express = require('express');
const path = require('path');
const app = express();  // Init App

// View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {    // Home Route

    let heroes = [
        {
            id: 1,
            hero: 'Wonder Woman',
            name: 'Diana Prince', 
            body: 'Suspendisse vehicula quis lectus sit amet placerat. Nunc tempor, nisl quis lacinia consequat, lacus magna pellentesque purus, eget laoreet mi massa sit amet neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae',
            pic: 'wonder-woman.png', 
            cat: 'Immortal'
        },
        {
            id: 2,
            hero: 'Raven',
            name: 'Rachel Roth', 
            body: 'Suspendisse vehicula quis lectus sit amet placerat. Nunc tempor, nisl quis lacinia consequat, lacus magna pellentesque purus, eget laoreet mi massa sit amet neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae',
            pic: 'raven.png', 
            cat: 'Sorceress'
        },
        {
            id: 3,
            hero: 'Zatanna',
            name: 'Zatanna Zatarra', 
            body: 'Suspendisse vehicula quis lectus sit amet placerat. Nunc tempor, nisl quis lacinia consequat, lacus magna pellentesque purus, eget laoreet mi massa sit amet neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae',
            pic: 'zatanna.png', 
            cat: 'Magicaian'
        },
        {
            id: 4,
            hero: 'Supergirl',
            name: 'Kara Zor-El', 
            body: 'Suspendisse vehicula quis lectus sit amet placerat. Nunc tempor, nisl quis lacinia consequat, lacus magna pellentesque purus, eget laoreet mi massa sit amet neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae',
            pic: 'supergirl.png', 
            cat: 'Alien'
        },
        {
            id: 5,
            hero: 'Mary Marvel',
            name: 'Mary Bromfield', 
            body: 'Suspendisse vehicula quis lectus sit amet placerat. Nunc tempor, nisl quis lacinia consequat, lacus magna pellentesque purus, eget laoreet mi massa sit amet neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae',
            pic: 'marry-marvel.png', 
            cat: 'Champion'
        }
    ];

    res.render('index', {
        title: 'This is Heroes and Villains', 
        heroes: heroes
    });
});

app.get('/heroes/add', (req, res) => {
    res.render('add_hero', {
        title: 'Add a Hero'
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Running on http://localhost:${PORT}`));  // Start Server