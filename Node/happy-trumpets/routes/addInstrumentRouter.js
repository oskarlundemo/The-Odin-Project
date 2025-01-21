


const {Router} = require('express');
const {addInstrument} = require('../controllers/addInstrumentController');


const addInstrumentRouter = new Router();

addInstrumentRouter.get('/', (req, res) => {
    res.render('addPage', { title: 'Add Instrument', subheader: 'Add an instrument'});
})


addInstrumentRouter.post('/', addInstrument);

module.exports = addInstrumentRouter;