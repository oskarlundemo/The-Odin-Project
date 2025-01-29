





const {Router} = require('express');
const {loadHomepage, logOutUser} = require("../controllers/homepageController");

const homepageRouter = new Router();

homepageRouter.get('/', loadHomepage);
homepageRouter.get('/log-out', logOutUser);

module.exports = homepageRouter;