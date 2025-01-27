



const pool = require('./pool');
const bcrypt = require('bcryptjs')

async function createNewUser (user) {
    try {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        const {rows} = await pool.query('INSERT INTO "users" (username, password, firstname, lastname, email) VALUES ($1, $2, $3, $4, $5);',
            [
                user.username, hashedPassword,
                user.firstname, user.lastname,
                user.email,
            ],
        );
    } catch(err) {
        console.log(err);
    }
}

module.exports = {
    createNewUser,
}