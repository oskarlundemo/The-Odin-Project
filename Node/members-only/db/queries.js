



const pool = require('./pool');
const bcrypt = require('bcryptjs')

async function createNewUser (user) {
    try {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        await pool.query('INSERT INTO "users" (username, password, firstname, lastname, email) VALUES ($1, $2, $3, $4, $5);',
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


async function memberRequest (input, user) {
    try {
        const {rows} = await pool.query('SELECT * FROM member_secrets WHERE password = $1;', [input]);


        if (rows.length >= 1) {
            await pool.query('UPDATE users SET member_status = true WHERE user_id = $1;', [
                user
            ])
        }

    } catch (e) {
        console.log(e);
    }
}

async function saveNewMessage (message, user) {
    try {
        /*
        Create the new post
         */
        await pool.query('INSERT INTO "posts" (title, body) VALUES ($1, $2);',
            [
                message.title,
                message.body,
            ]
        );

        /*
        Retreieve the id from that post (which is the latest)
         */
        const {rows} = await pool.query('SELECT * FROM "posts"');
        const lastId = rows[rows.length - 1].post_id;

        /*
        Connect the new post with the author is separeate table
         */
        await pool.query('INSERT INTO "author" (post_id, author_id) VALUES ($1, $2);',
            [
                lastId,
                user.user_id
            ]
            )

    } catch (err) {
        console.log(err);
    }
}

async function getPosts (user) {
    try {
        const {rows} = await pool.query('SELECT u.username, p.title, p.body, p.created FROM "users" u JOIN author a ON u.user_id = a.author_id JOIN posts p ON p.post_id = a.post_id ');
        return rows;
    } catch (e) {
        console.log(e);
    }
}


module.exports = {
    createNewUser,
    saveNewMessage,
    getPosts,
    memberRequest
}