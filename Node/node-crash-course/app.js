

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
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));



app.get('/', (req, res) => {

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


app.post('/blogs', (req, res) => {
    const blog = new Blog(req.body);

    blog.save()
        .then((result) => {
            res.redirect('/');
        })
        .catch((err) => {
            res.status(500).send('Server Error');
            console.error(err);
        })
})


app.get('/blogs/:id', (req, res) => {
    const id = req.params.id;

    Blog.findById(id)
        .then((result) => {
            res.render('details', {blog: result, title: 'Blog Details'})
        })
})



app.delete('/blogs/:id', (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
        .then((result) => {
            res.json({redirect: '/'})
        })
        .catch((err) => {
            res.status(500).send('Server Error');
            console.error(err);
        })
})




app.get('/create', function(req, res) {
    res.render('create', {title: 'New post'});
})

app.get('/about', (req, res) => {
    res.render('about', {title: 'About'});
})

app.use((req, res) => {
    res.status(404).render('404', {title: 'Error'});
})