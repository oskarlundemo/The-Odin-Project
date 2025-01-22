



const {insertInstrument} = require('../db/queries');


exports.addInstrument = async (req, res) => {
    const instrument = {
        model: req.body.model,
        brand: req.body.brand,
        color: req.body.color,
        year: req.body.year,
        frets: req.body.frets,
    }
    await insertInstrument(instrument);
    console.log(instrument);
}
