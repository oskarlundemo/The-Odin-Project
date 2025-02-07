


const {getInstruments, searchInstruments, insertInstrument, deleteInstrument, editInstrument} = require("../db/queries");


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



exports.editInstrument = async (req, res) => {

    const editGuitar = {
        g_id: req.body.guitar_id,
        m_id: req.body.brand_id,
        model: req.body.model,
        frets: req.body.frets,
        color: req.body.color,
        year: req.body.year,
    }

    await editInstrument(editGuitar);
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
    const guitarId = req.params.id;
    const brandId = req.body.brand_id;

    try {
        await deleteInstrument(guitarId, brandId);
        const referer = req.get('Referer') || '/';
        res.json({ redirect: referer });
    } catch (e) {
        console.error(e);
        res.status(500).json({error})
    }
}


exports.getInstrument = async (req, res) => {
    const instrument = await getInstruments();

    const values = {
        instrument,
    }
    res.render('index', {values: values});
}



