


const {Router} = require('express');
const {addInstrument} = require('../controllers/addGuitarController');


const addInstrumentRouter = new Router();

addInstrumentRouter.get('/', (req, res) => {
    res.render('addGuitar', { title: 'Add Instrument', subheader: 'Add an instrument'});
})


addInstrumentRouter.post('/', addInstrument);

module.exports = addInstrumentRouter;