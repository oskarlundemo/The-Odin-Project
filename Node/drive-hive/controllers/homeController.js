const {body, validationResult} = require("express-validator");
const {createNewFolder} = require('../index');


exports.loadHomepage = (req, res) => {
    res.render('home', {title: 'Home', errors: {}});
}

exports.validateFolder = [
    body('foldername')
        .trim().trim()
        .isLength({min: 1, max: 15})
        .withMessage('Please enter a valid name')
]


exports.handleValidationErrors = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).render('login', {title: "Login", errors: errors.array()});
    }
    next();
}



exports.newFolder = async (req, res) => {
    console.log(req.body);
    console.log(req.body.user);
    await createNewFolder(req.body.foldername);
    res.render('home', {title: 'Home', errors: {}});
}