

const express = require('express');
const app = express();
const path = require('node:path')

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const db = require("./db.js");
const authorRouter = require('./routes/authorRouter');
const bookRouter = require('./routes/bookRouter');
const indexRouter = require('./routes/indexRouter');


// app.js
const links = [
    { href: "/", text: "Home" },
    { href: "about", text: "About" },
];

const users = ['Rose', 'Cake', 'Biff']

app.get('/', (req, res) => {
    res.render('index', {links: links, users: users});
})

app.use('/authors', authorRouter);
app.use('/books', bookRouter);
app.use('/', indexRouter);



const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
})