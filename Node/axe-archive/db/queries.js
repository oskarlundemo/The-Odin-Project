


const pool = require('./pool');

async function insertInstrument(instrument) {
    await pool.query('INSERT INTO instrument (brand, model, color, year, frets ) VALUES ($1, $2, $3, $4, $5);',
        [instrument.brand, instrument.model, instrument.color, instrument.year, instrument.frets],
    );
}


async function getInstruments () {
    try {
        const {rows}= await pool.query('SELECT * FROM "Guitar"')
        return rows;
    } catch (err) {
        console.error(err);
    }
}


module.exports = {
    insertInstrument,
    getInstruments
}