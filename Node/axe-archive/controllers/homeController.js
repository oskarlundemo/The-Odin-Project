


const {getInstruments, searchInstruments, insertInstrument, deleteInstrument, } = require("../db/queries");


exports.addInstrument = async (req, res) => {
    const newInstrument = {
        model: req.body.model,
        snumber: req.body.snumber,
        color: req.body.color,
        year: req.body.year,
        frets: req.body.frets,
        brand: req.body.brand,
    }
    await insertInstrument(newInstrument);

    const instrument = await getInstruments();
    const values = {
        instrument,
    }
    res.render('index', {values: values});
}


exports.searchInstruments = async (req, res) => {
    try {
        const searchString  = req.query.search;
        const instrument = await searchInstruments(searchString);
        const values = {
            instrument,
        }
        res.render('index', {values: values});

    } catch (e) {
        console.error(e);
    }
}


exports.deleteInstrument = async (req, res) => {
    const id = req.params.id;
    const guitarId = req.params.id.split(' ')[0];
    const brandId = req.params.id.split(' ')[1];

    res.json({ redirect: "http://localhost:3000/" }); // Send the redirect URL
    await deleteInstrument(guitarId, brandId);
}


exports.getInstrument = async (req, res) => {
    const instrument = await getInstruments();

    const values = {
        instrument,
    }
    res.render('index', {values: values});
}



