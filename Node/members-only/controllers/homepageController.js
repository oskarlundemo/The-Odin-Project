const {saveNewMessage, getPosts, meme, memberRequest} = require("../db/queries");


exports.loadHomepage = async (req, res) => {
    const posts = await getPosts();
    res.render("index", {title: "Home", user: req.user, messages: posts});
}


exports.logOutUser = (req, res) => {
    req.logout((err) => {
        if (err) return next(err);
        req.session.destroy(() => {
            res.redirect('/login');
        });
    });
}


exports.memberRequest = async (req, res) => {
    console.log(req.body);
    await memberRequest(req.body.secret, req.user.user_id);
    res.redirect('/home');
}

exports.postMessage = async (req, res) => {
    const message = {
        title: req.body.title,
        body: req.body.body,
    }
    const user = req.user;

    await saveNewMessage(message, user);
    res.redirect('/home');
}

