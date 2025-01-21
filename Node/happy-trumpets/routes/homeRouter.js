


const {Router} = require('express');
const {getInstrument} = require('../controllers/homeController');


const homeRouter = new Router();
homeRouter.get('/',getInstrument);

module.exports = homeRouter;