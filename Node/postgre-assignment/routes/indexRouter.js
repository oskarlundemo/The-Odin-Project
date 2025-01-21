


const {Router} = require("express");
const {getUsers, createUsers} = require("../controllers/userController");

const indexRouter = Router();

indexRouter.get('/', getUsers);

indexRouter.get('/new', createUsers);

indexRouter.post('/new', createUsers);


module.exports = indexRouter;