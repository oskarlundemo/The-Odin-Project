
const {Router} = require("express");
const {loadUI, addUser, handleValidationErrors, validateNewUser, loginUser} = require("../controllers/loginController");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const pool = require('../db/pool');
const bcrypt = require('bcryptjs')

const loginRouter = new Router();

loginRouter.get('/', loadUI);
loginRouter.post('/sign-up', validateNewUser, handleValidationErrors, addUser);
loginRouter.post("/login", passport.authenticate("local", {
        successRedirect: "/home",
        failureRedirect: "/",
        failureFlash: true
    }, (req, res) => {
        console.log('Authenticated User:', req.user);  // Log the user info
    })
);


passport.use(
    new LocalStrategy(async (username, password, done) => {
        try {
            const { rows } = await pool.query("SELECT * FROM users WHERE username = $1", [username]);
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
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const { rows } = await pool.query("SELECT * FROM users WHERE user_id = $1", [id]);
        const user = rows[0];
        done(null, user);
    } catch(err) {
        done(err);
    }
});



module.exports = loginRouter;