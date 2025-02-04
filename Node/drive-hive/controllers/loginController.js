const {addNewUser} = require("../index");
const bcrypt = require('bcryptjs');
const {body, validationResult} = require('express-validator');
const passport = require('passport');



exports.loadLogin = (req, res) => {
    res.render("login", {title: "Drive Hive - Login", errors: {}});
}


exports.validateNewUser = [
    body('firstname')
        .trim().escape()
        .isLength({ min: 1 , max: 15})
        .withMessage('First name must be between 1 and 20 characters'),
    body('lastname')
        .trim().escape()
        .isLength({ min: 1 , max: 20})
        .withMessage('Last name must be between 1 and 20 characters'),
    body('email')
        .trim()
        .isEmail()
        .normalizeEmail()
        .withMessage('Please enter an valid email address'),
    body('newPassword')
        .trim()
        .isLength({ min: 8})
        .withMessage('Password must be at least 8 characters')
        .matches(/[A-Z]/)
        .withMessage('Password must contain at least one big letter')
        .matches(/[!@#$%^&*(),.?":{}|<>]/)
        .withMessage('Password must contain at least one special character'),
    body('reenterpassword')
        .trim()
        .custom((value, {req}) => {
            if (value !== req.body.newPassword) {
                throw new Error('Password did not match');
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


exports.addNewUser = async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.newPassword, 10)
        console.log(req.body);
        const user = {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            username: req.body.username,
            password: hashedPassword,
        }
        await addNewUser(user);
        console.log('Added')
        res.redirect('/home');
    } catch (error) {
        console.error(error);
    }
}

exports.loginUser = passport.authenticate("local", {
    successRedirect: "http://localhost:3000/home",
    failureRedirect: "http://localhost:3000/login",
    failureFlash: 'Invalid username or password'
});