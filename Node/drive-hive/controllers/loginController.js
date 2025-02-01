

exports.loadLogin = (req, res) => {
    console.log('Load login');
    res.render("login", {title: "Drive Hive - Login", errors: {}});
}