const {body, validationResult} = require("express-validator");
const {createNewFolder, getUserFolders, deleteFolder} = require('../index');


exports.loadHomepage = async (req, res) => {
    const folders = await getUserFolders(req.user);
    res.render('home', {title: 'Home', errors: {}, user: req.user, folders: folders});
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
        return res.status(400).render('home', {title: "Home", errors: errors.array()});
    }
    next();
}


exports.logOutUser = (req, res) => {
    req.logout((err) => {
        if (err) return next(err);
        req.session.destroy(() => {
            res.redirect('/login');
        });
    });
}

exports.deleteFolder = async (req, res, next) => {
    const folderId = req.params.id;
    try {
        await deleteFolder(folderId, req.user.id);
        const referer = req.get('Referer') || '/';
        res.json({redirect: referer});

    } catch (e) {
        console.error(e);
        res.status(500).json({e})
    }
    next();
}




exports.newFolder = async (req, res, next) => {
    await createNewFolder(req.body.foldername, req.user);
    next();
};
