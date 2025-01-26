


const {body, validationResult} = require('express-validator');


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
        return res.status(400).send({errors: errors.array()});
    }
    next();
}

exports.loadUI = (req, res) => {
    res.render("login", {title: "Login"});
}

exports.addUser = (req, res) => {
    console.log(req.body);

    body('username').isLength({ min: 3, max: 10}).withMessage('Username must be at least 3 characters long');
}