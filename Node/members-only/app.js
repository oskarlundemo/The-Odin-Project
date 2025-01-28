


const path = require('path');
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const bcrypt = require('bcryptjs')


const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(session({ secret: "cats", resave: false, saveUninitialized: false }));
app.use(passport.session());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

const homeRouter = require("./routes/homeRouter");
const loginRouter = require("./routes/loginRouter");


app.listen(3000, () => console.log("app listening on port 3000!"));


app.use('/', homeRouter);
app.use('/login', loginRouter);