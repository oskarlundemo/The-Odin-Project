


const {Router} = require('express');
const {getInstrument, searchInstruments} = require('../controllers/homeController');


const homeRouter = new Router();
homeRouter.get('/',getInstrument);
homeRouter.get('/search', searchInstruments);

module.exports = homeRouter;