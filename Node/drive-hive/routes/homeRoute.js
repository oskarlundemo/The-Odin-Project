


const {Router} = require("express");
const {loadHomepage, validateFolder,handleValidationErrors, newFolder} = require("../controllers/homeController");

const homeRoute = new Router();

homeRoute.get('/', loadHomepage);
homeRoute.post('/new-folder', validateFolder, handleValidationErrors, newFolder);

module.exports = homeRoute;