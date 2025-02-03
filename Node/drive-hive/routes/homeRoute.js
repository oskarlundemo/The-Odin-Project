


const {Router} = require("express");
const {loadHomepage} = require("../controllers/homeController");

const homeRoute = new Router();

homeRoute.get('/', loadHomepage);


module.exports = homeRoute;