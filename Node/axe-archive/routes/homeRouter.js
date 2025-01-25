


const {Router} = require('express');
const {getInstrument, searchInstruments,
    addInstrument, deleteInstrument,
    editInstrument} = require('../controllers/homeController');


const homeRouter = new Router();
homeRouter.get('/',getInstrument);
homeRouter.get('/search', searchInstruments);
homeRouter.post('/', addInstrument);
homeRouter.post('/edit', editInstrument)
homeRouter.delete('/:id', deleteInstrument)

module.exports = homeRouter;