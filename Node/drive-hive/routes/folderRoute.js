


const {Router} = require('express');
const {loadFiles, saveFile} = require("../controllers/fileController");
const multer  = require('multer')
const {safeRe} = require("prisma/build/child");
const upload = multer({ dest: 'uploads/' })

const folderRouter = new Router();


folderRouter.get('/:foldername/:id', loadFiles);
folderRouter.post('/:foldername/:id', upload.single('filename'), saveFile);
module.exports = folderRouter;