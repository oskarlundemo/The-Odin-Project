


const pool = require('./pool');

async function insertInstrument(instrument) {
    await pool.query('INSERT INTO instrument (instrument_name, description, price) VALUES ($1, $2, $3);',
        [instrument.name, instrument.description, instrument.price],
    );
}


async function getInstruments () {
    try {
        const {rows}= await pool.query('SELECT * FROM instrument')
        return rows;
    } catch (err) {
        console.error(err);
    }
}


module.exports = {
    insertInstrument,
    getInstruments
}