


const pool = require('./pool');

async function insertInstrument(instrument) {
    await pool.query('INSERT INTO instrument (brand, model, color, year, frets ) VALUES ($1, $2, $3, $4, $5);',
        [instrument.brand, instrument.model, instrument.color, instrument.year, instrument.frets],
    );
}


async function getInstruments () {
    try {
        const {rows}= await pool.query('SELECT g.color, g.year, g.model, g.frets, m.company FROM "Guitar" g JOIN "Manufacturer" m ON g.manufacturer_id = m.id')
        return rows;
    } catch (err) {
        console.error(err);
    }
}


async function searchInstruments(string) {
    try {
        const { rows } = await pool.query(
            `SELECT g.color, g.year, g.model, g.frets, m.company
             FROM "Guitar" g
                      JOIN "Manufacturer" m ON g.manufacturer_id = m.id
             WHERE g.model ILIKE $1 OR m.company ILIKE $1`,
            [`%${string}%`]
        );
        return rows;
    } catch (e) {
        console.error(e);
    }
}
async function deleteInstrument (id) {
    try {
        await pool.query('DELETE FROM "Guitar" WHERE id = ?', [id]);
    } catch (e) {
        console.error(e);
    }
}


async function getCompanies () {
    try {
        const {rows} = await pool.query('SELECT (company) FROM "Manufacturer"')
        return rows;
    } catch (e) {
        console.error(e);
    }
}

async function getModels () {
    try {
        const {rows} = await pool.query('SELECT (model) FROM "Guitar"')
        return rows;
    } catch (err) {
        console.error(err);
    }
}

async function getColors () {
    try {
        const {rows} = await pool.query('SELECT (color) FROM "Guitar"')
        return rows;
    } catch (err) {
        console.error(err);
    }
}


async function getFrets () {
    try {
        const {rows} = await pool.query('SELECT (frets) FROM "Guitar" GROUP BY (frets);')
        return rows;
    } catch (err) {
        console.error(err);
    }
}


module.exports = {
    insertInstrument,
    getInstruments,
    deleteInstrument,
    getCompanies,
    getModels,
    getColors,
    getFrets,
    searchInstruments
}