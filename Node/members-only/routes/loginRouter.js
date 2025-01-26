
const {Router} = require("express");
const {loadUI, addUser, handleValidationErrors, validateNewUser} = require("../controllers/loginController");

const loginRouter = new Router();

loginRouter.get('/login', loadUI);
loginRouter.post('/sign-up', validateNewUser, handleValidationErrors, addUser);

module.exports = loginRouter;