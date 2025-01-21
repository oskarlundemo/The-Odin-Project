



const {insertInstrument} = require('../db/queries');


exports.addInstrument = async (req, res) => {
    const instrument = {
        name: req.body.title,
        description: req.body.content,
        price: req.body.price,
    }
    await insertInstrument(instrument);
    console.log(instrument);
}
