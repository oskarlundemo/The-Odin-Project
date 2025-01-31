





const {Router} = require('express');
const {loadHomepage, logOutUser, postMessage, memberRequest} = require("../controllers/homepageController");

const homepageRouter = new Router();

homepageRouter.get('/', loadHomepage);
homepageRouter.get('/log-out', logOutUser);
homepageRouter.post('/message', postMessage)
homepageRouter.post('/member', memberRequest)

module.exports = homepageRouter;