


const {getInstruments, getCompanies, getModels, getColors, getFrets, se, searchInstruments} = require("../db/queries");
const {values} = require("pg/lib/native/query");



exports.searchInstruments = async (req, res) => {
    try {
        const searchString  = req.query.search;
        const instrument = await searchInstruments(searchString);
        console.log(searchString);

        const values = {
            instrument,
        }
        res.render('index', {values: values});

    } catch (e) {
        console.error(e);
    }
}



exports.getInstrument = async (req, res) => {
    const instrument = await getInstruments();
    const companies = await getCompanies();

    const colors = await getColors();
    const models = await getModels();

    const frets = await getFrets();

    const values = {
        instrument,
        companies,
        models,
        colors,
        frets,
    }
    res.render('index', {values: values});
}



