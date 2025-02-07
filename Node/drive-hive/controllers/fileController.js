const {loadFiles, getFolder} = require("../index");



exports.loadFiles = async (req, res) => {

    const {foldername, id } = req.params;

    console.log(req.params);
    const decodedFolderName = decodeURIComponent(foldername);



    res.render('folder',
        {
            title: decodedFolderName,
            errors: {},
            user: req.user,
            files: {},
        });
}


exports.saveFile = async (req, res) => {
    const { foldername, id } = req.params;

    if (!req.file) {
        return res.status(400).json({ message: "No file uploaded" });
    }

    console.log("File uploaded:", req.file);

    res.redirect(`/${encodeURIComponent(foldername)}/${id}`);
};