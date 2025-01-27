


exports.loadHomepage = (req, res) => {
    console.log("I controller");
    res.render("index", {title: "Home"});
}