
const {Router} = require("express");
const {loadUI, addUser, handleValidationErrors, validateNewUser, loginUser} = require("../controllers/loginController");


const loginRouter = new Router();

loginRouter.get('/', loadUI);
loginRouter.post('/sign-up', validateNewUser, handleValidationErrors, addUser);
loginRouter.post("/login", loginUser);


module.exports = loginRouter;