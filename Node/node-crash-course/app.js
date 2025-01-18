

const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');

const app = express();

// connect to MongoDB server
const dbURI = 'mongodb+srv://lundemo:test123@nodetuts.eo9gw.mongodb.net/?retryWrites=true&w=majority&appName=nodetuts';

mongoose.connect(dbURI)
    .then((res) => {
        app.listen(3000);
    })
    .catch((err) => {console.error(err);});


app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(morgan('dev'));



app.get('/', function(req, res) {
    res.render('index', {title: 'Home'})
})


app.get('/blogs', (req, res) => {

    Blog.find()
        .then((result) => {
            console.log('Blogs fetched from DB:', result); // Debugging step
            res.render('index', { title: 'All blogs', blogs: result });
        })
        .catch((err) => {
            console.error('Error fetching blogs:', err); // Debugging step
            res.status(500).send('Server Error');
        });
});


app.get('/create', function(req, res) {
    res.render('create', {title: 'New post'});
})

app.use((req, res) => {
    res.status(404).render('404', {title: 'Error'});
})