

const express = require('express');
const app = express();

const db = require("/db.js");
const authorRouter = require('./routes/authorRouter');
const bookRouter = require('./routes/bookRouter');
const indexRouter = require('./routes/indexRouter');


app.use('/authors', authorRouter);
app.use('/books', bookRouter);
app.use('/', indexRouter);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
})