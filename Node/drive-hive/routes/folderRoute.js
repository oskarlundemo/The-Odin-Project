


const {Router} = require('express');
const {loadFiles, saveFile, deleteFile, downloadFileFromDB} = require("../controllers/fileController");
const multer  = require('multer')
const storage = multer.memoryStorage();
const upload = multer({ storage });

const folderRouter = new Router();


folderRouter.get('/:foldername/:id', loadFiles);
folderRouter.get('/:foldername/:id/:fileId', downloadFileFromDB);
folderRouter.post('/:foldername/:id', upload.single('filename'), saveFile);
folderRouter.delete('/:foldername/:id/:fileId', deleteFile);
module.exports = folderRouter;