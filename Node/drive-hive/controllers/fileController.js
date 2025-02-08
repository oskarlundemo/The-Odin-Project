const {loadFolder, loadFiles, saveFile, deleteFileFromDB, getSingleFileFromDB} = require("../index");

const download = require('download');
const { createClient } = require('@supabase/supabase-js');

const fs = require('fs').promises;
const supabaseUrl = 'https://szbfcswimsizxxcbtbyx.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

function formatFileSize (bytes) {
    if (bytes < 1024) return bytes + " B";
    let kb = bytes / 1024;
    if (kb < 1024) return kb.toFixed(2) + " KB";
    let mb = kb / 1024;
    if (mb < 1024) return mb.toFixed(2) + " MB";
    let gb = mb / 1024;
    return gb.toFixed(2) + " GB";
}


function formatFileName (fileName) {
    if (fileName.length > 30) {
        let splitString = fileName.substring(0, 30);
        let lastSpace = splitString.lastIndexOf(" ");
        let fileType = fileName.substring(fileName.lastIndexOf('.'), fileName.length);

        return fileName.substring(0, lastSpace) + "... ." + fileType;
    }
    return fileName;
}


exports.loadFiles = async (req, res) => {

    const {foldername, id} = req.params;
    const decodedFolderName = decodeURIComponent(foldername);

    const folder = await loadFolder(parseInt(id));
    const files = await loadFiles(parseInt(id));

    res.render('folder',
        {
            title: decodedFolderName,
            errors: {},
            user: req.user,
            files: files,
            folder: folder,
            formatFileSize,
            formatFileName,
        });
}


exports.deleteFile = async (req, res) => {
    const fileId = parseInt(req.params.fileId);
    try {
        await deleteFileFromDB(fileId);
        const referer = req.get('Referer') || '/';
        res.json({redirect: referer});
    } catch (e) {
        console.error(e);
        res.status(400).json({e})
    }
}


exports.saveFile = async (req, res) => {


    const { foldername, id } = req.params;
    await saveFile(parseInt(id), req.file);

    console.log(req.file);

    const filePath = `${foldername}/${req.file.filename}`; // Create a structured path
    const fileMimeType = req.file.mimetype;


    try {

        const fileBuffer = await fs.readFile(req.file.path);

        const fileBlob = new Blob([fileBuffer], { type: fileMimeType });


        const {data, error} = await supabase
            .storage
            .from('drive-hive')
            .upload(filePath, fileBuffer, {
                contentType: req.file.mimetype, // 👈 Add this to fix the issue!
                cacheControl: '3600',
                upsert: false,
            })
        console.log('File uploaded successfully:', data);
    } catch (err) {
        console.error('Error uploading file:', err.message);
    }


    if (!req.file) {
        return res.status(400).json({ message: "No file uploaded" });
    }
    res.redirect(`/${encodeURIComponent(foldername)}/${id}`);
};


exports.downloadFileFromDB = async (req, res) => {
    const file = await getSingleFileFromDB(parseInt(req.params.fileId));

    console.log(file);

    try {
        await download(file.path, 'downloads');
    } catch (err) {
        console.log(err);
    }

}