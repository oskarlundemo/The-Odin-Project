





const express = require("express");
const app = express();
const path = require('path');


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

const PORT = process.env.PORT || 3000;

const homeRouter = require("./routes/homeRouter");

app.listen(PORT, () => {
    console.log("Listening on port " + PORT);
})

app.use('/', homeRouter)
