


const {body, validationResult} = require('express-validator');
const {createNewUser} = require("../db/queries");
const LocalStrategy = require('passport-local');
const passport = require('passport');
const pool = require("../db/pool");
const bcrypt = require("bcryptjs");


exports.validateNewUser = [
    body('firstname')
        .isLength({min: 1})
        .withMessage('First name is required'),

    body('lastname')
        .isLength({min: 1})
        .withMessage('Last name is required'),

    body('email')
        .isEmail()
        .withMessage('Please provide a valid email address'),

    body('username')
        .isLength({min: 3, max: 10})
        .withMessage('Username must be between 3 and 10 characters'),

    body('newPassword')
        .isLength({min: 8, max: 100})
        .withMessage('Password must be atleast 8 characters')
        .matches(/[A-Z]/)
        .withMessage('Password must contain at least one big letter')
        .matches(/[!@#$%^&*(),.?":{}|<>]/)
        .withMessage('Password must contain at least one special character'),

    body('reeenterpassword')
        .custom((value, {req}) => {
            if (value !== req.body.newPassword) {
                throw new Error('Passwords do not match');
            }
            return true;
        })
]


exports.handleValidationErrors = (req, res, next) => {
    const errors = validationResult(req);
    console.log(req.body);

    if (!errors.isEmpty()) {
        return res.status(400).render('login', {title: "Login", errors: errors.array()});
    }
    next();
}

exports.loadUI = (req, res) => {
    res.render("login", {title: "Login", errors: {}});
}

exports.addUser = async (req, res) => {
    const newUser = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.newPassword,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
    }

    await createNewUser(newUser)
    res.redirect("/index");
}


exports.loginUser = passport.authenticate("local", {
        successRedirect: "http://localhost:3000/home",
        failureRedirect: "/login",
        failureFlash: true
});