


const {Router} = require("express");
const {deleteFolder, logOutUser, loadHomepage, validateFolder,handleValidationErrors, newFolder} = require("../controllers/homeController");

const homeRoute = new Router();

homeRoute.get('/', loadHomepage);
homeRoute.post('/', validateFolder, handleValidationErrors, newFolder, loadHomepage);
homeRoute.get('/log-out', logOutUser);
homeRoute.delete('/:id', deleteFolder);
module.exports = homeRoute;