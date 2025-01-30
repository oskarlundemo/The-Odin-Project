





const {Router} = require('express');
const {loadHomepage, logOutUser, postMessage} = require("../controllers/homepageController");

const homepageRouter = new Router();

homepageRouter.get('/', loadHomepage);
homepageRouter.get('/log-out', logOutUser);
homepageRouter.post('/message', postMessage)

module.exports = homepageRouter;