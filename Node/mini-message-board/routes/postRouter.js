




const {Router} = require('express');
const {addMessage} = require("../controllers/messageController");

const postRouter = new Router();

postRouter.get("/", (req, res) => {
    res.render('post');
})

postRouter.post('/', addMessage);

module.exports = postRouter;