

const {getAllUsernames, insertUsername} = require('../db/queries');

exports.createUsers = async (req, res) => {
    console.log('Create users: '+ req.body.username);
    const username = req.body.username;
    await insertUsername(username);
    res.render("new", {title: 'New user form'});
    console.log(username);
}

exports.updateUsers = async (req, res) => {

}

exports.getUsers = async (req, res) => {
    console.log('Get users: '+ req.username);
    await getAllUsernames();
}