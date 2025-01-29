


const path = require('path');
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const bcrypt = require('bcryptjs')


const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(session({ secret: "dogs", resave: false, saveUninitialized: false }));
app.use(passport.session());
app.use(passport.initialize());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

passport.use(
    new LocalStrategy(async (username, password, done) => {
        console.log('Authenticated User:', username, password);
        try {
            const { rows } = await pool.query('SELECT * FROM users WHERE username = $1;',
                [username]
            );
            const user = rows[0];

            const match = await bcrypt.compare(password, user.password);
            if (!user) {
                return done(null, false, { message: "Incorrect username" });
            }
            if (!match) {
                return done(null, false, { message: "Incorrect password" })
            }
            return done(null, user);
        } catch(err) {
            return done(err);
        }
    })
);

passport.serializeUser((user, done) => {
    done(null, user.user_id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const { rows } = await pool.query("SELECT * FROM users WHERE user_id = $1", [id]);
        console.log(rows);
        const user = rows[0];
        done(null, user);
    } catch(err) {
        done(err);
    }
});

const homeRouter = require("./routes/homeRouter");
const loginRouter = require("./routes/loginRouter");
const pool = require("./db/pool");


app.listen(3000, () => console.log("app listening on port 3000!"));


app.use('/home', homeRouter);
app.use('/login', loginRouter);