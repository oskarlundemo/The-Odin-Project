




const express = require('express');
const app = express();
const path = require('path');


app.use(express.static(path.join(__dirname, 'public')));


app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));


const {indexRouter} = require('./routes/indexRouter');
const postRouter = require('./routes/postRouter');

const PORT = 3000;


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT} in mini-message board`);
})

app.use('/', indexRouter);
app.use('/post', postRouter)

