


exports.loadHomepage = (req, res) => {
    console.log("I controller");


    console.log(req.user.username);

    console.log("I efter");
    res.render("index", {title: "Home", user: req.user});
}

exports.logOutUser = (req, res) => {
    req.logout((err) => {
        if (err) return next(err);
        req.session.destroy(() => {
            res.redirect('/login');
        });
    });
}