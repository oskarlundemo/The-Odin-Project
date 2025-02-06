


const {Router} = require("express");
const {logOutUser, loadHomepage, validateFolder,handleValidationErrors, newFolder} = require("../controllers/homeController");

const homeRoute = new Router();

homeRoute.get('/', loadHomepage);
homeRoute.post('/new-folder', validateFolder, handleValidationErrors, newFolder);
homeRoute.get('/log-out', logOutUser)
module.exports = homeRoute;