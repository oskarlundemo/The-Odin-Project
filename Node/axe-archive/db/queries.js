


const pool = require('./pool');

async function insertInstrument(instrument) {

    let manufacturerId;

    const {rows} = await pool.query('SELECT id FROM "Manufacturer" WHERE company ILIKE $1 LIMIT 1;',
        [`%${instrument.brand}%`],
    );

    if (rows.length > 0) {
        manufacturerId = rows[0].id;
    } else {
        await pool.query('INSERT INTO "Manufacturer" (company) VALUES ($1);',
            [instrument.brand],
        );
        const {rows} =  await pool.query('SELECT id FROM "Manufacturer" WHERE company ILIKE $1 LIMIT 1;',
            [`%${instrument.brand}%`],
        );
        manufacturerId = rows[0].id;
    }

    await pool.query('INSERT INTO "Guitar" (model, color, year, frets, serial_number, manufacturer_id) VALUES ($1, $2, $3, $4, $5, $6);',
        [
            instrument.model, instrument.color,
            instrument.year, instrument.frets,
            instrument.snumber, manufacturerId
        ],
    );
}

async function getInstruments () {
    try {
        const {rows}= await pool.query('SELECT g.serial_number, g.color, g.year, g.model, g.frets, m.company, m.id FROM "Guitar" g JOIN "Manufacturer" m ON g.manufacturer_id = m.id')
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
async function deleteInstrument (guitarId, brandId) {
    try {
        await pool.query('DELETE FROM "Guitar" WHERE serial_number = $1 AND manufacturer_id = $2',
            [guitarId, brandId]);
    } catch (e) {
        console.error(e);
    }
}


module.exports = {
    insertInstrument,
    getInstruments,
    searchInstruments,
    deleteInstrument
}