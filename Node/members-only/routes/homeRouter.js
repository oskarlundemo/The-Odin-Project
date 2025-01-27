





const {Router} = require('express');
const {loadHomepage} = require("../controllers/homepageController");

const homepageRouter = new Router();

homepageRouter.get('/', loadHomepage);

module.exports = homepageRouter;