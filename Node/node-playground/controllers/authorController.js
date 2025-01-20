

const CustomNotFoundError = require("../errors/CustomNotFoundError");

const db = require("../db.js");

async function getAuthorById(req, res) {
    const {authorId} = req.params;

    const author = await db.getAuthorById(Number(authorId));

    console.log('Inne i authorControllers');

    if (!author) {
        throw new CustomNotFoundError('Author not found');
    }

    res.send(`Author Name: ${author.name}`);
}

module.exports = {getAuthorById};