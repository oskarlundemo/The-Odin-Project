

const express = require('express');

const app = express();

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.listen(3000);

app.get('/', function(req, res) {
    res.render('index', {title: 'Home'})
})

app.get('/about', function(req, res) {
    res.render('about', {title: 'About'});
})

app.get('/create', function(req, res) {
    res.render('create', {title: 'New post'});
})

app.use((req, res) => {
    res.status(404).render('404', {title: 'Error'});
})