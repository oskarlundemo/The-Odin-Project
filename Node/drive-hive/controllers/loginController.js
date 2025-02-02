const prisma = require("@prisma/client");
const {addNewUser} = require("../index");
const bcrypt = require('bcryptjs')



exports.loadLogin = (req, res) => {
    res.render("login", {title: "Drive Hive - Login", errors: {}});
}


exports.addNewUser = async (req, res) => {

    console.log(req.body)

    try {
        const hashedPassword = await bcrypt.hash(req.body.newPassword, 10)
        const user = {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            username: req.body.username,
            password: hashedPassword,
        }
        await addNewUser(user)
    } catch (error) {
        console.log(error);
    }
}