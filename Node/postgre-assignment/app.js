


const express = require('express');
const path = require('path');


const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));

app.use(express.json());

const PORT = process.env.PORT || 3000;
const indexRouter = require('./routes/indexRouter');


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})

app.use('/', indexRouter);
