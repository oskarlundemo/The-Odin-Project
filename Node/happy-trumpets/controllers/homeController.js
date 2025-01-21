


const {getInstruments} = require("../db/queries");


exports.getInstrument = async (req, res) => {
    const instrument = await getInstruments();
    console.table(instrument);
    res.render('index', {instruments: instrument, subheader: 'Home'});
}

