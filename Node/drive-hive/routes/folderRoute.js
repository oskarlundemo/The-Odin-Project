


const {Router} = require('express');
const {loadFiles, saveFile, deleteFile, downloadFileFromDB} = require("../controllers/fileController");
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

const folderRouter = new Router();


folderRouter.get('/:foldername/:id', loadFiles);
folderRouter.get('/:foldername/:id/:fileId', downloadFileFromDB);
folderRouter.post('/:foldername/:id', upload.single('filename'), saveFile);
folderRouter.delete('/:foldername/:id/:fileId', deleteFile);
module.exports = folderRouter;