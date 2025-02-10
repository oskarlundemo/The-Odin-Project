const {loadFolder, loadFiles, saveFile, deleteFileFromDB, getSingleFileFromDB} = require("../index");

const download = require('download');
const mime = require('mime-types');
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


function formatFileType (fileName) {
    return fileName.split('.').pop().toUpperCase();
}


function formatFileName (fileName) {
    if (fileName.length > 30) {
        let splitString = fileName.substring(0, 30);
        let lastSpace = splitString.lastIndexOf(" ");
        if (lastSpace < 0 || lastSpace > splitString.length) {
            return fileName.substring(0, 30) + "...";
        }
        return fileName.substring(0, lastSpace) + " ...";
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
            formatFileType
        });
}


exports.deleteFile = async (req, res) => {
    const fileId = parseInt(req.params.fileId);

    const file = await getSingleFileFromDB(fileId);
    console.log(file);

    try {
        await deleteFileFromDB(fileId);

        const {data, error} = await supabase
            .storage
            .from('drive-hive')
            .remove([`uploads/${file.name}`])


        if (!data) {
            console.log('No file found.');
            console.log(data)
        }

        if (error) {
            console.log(error.message);
        } else {
            console.log('File deleted successfully.');
        }


        const referer = req.get('Referer') || '/';
        res.json({redirect: referer});
    } catch (e) {
        console.error(e);
        res.status(400).json({e})
    }
}


exports.saveFile = async (req, res) => {

    console.log(req.file);

    const { foldername, id } = req.params;


    const filePath = `uploads/${req.file.originalname}`;
    const fileMimeType = req.file.mimetype;


    try {
        const fileBlob = new Blob([req.file.buffer], { type: fileMimeType });

        const {data, error} = await supabase
            .storage
            .from('drive-hive')
            .upload(filePath, fileBlob, {
                contentType: fileMimeType,
                cacheControl: '3600',
                upsert: true,
            })

        if (error) {
            console.error("❌ Supabase Error:", error.message);
        }

        await saveFile(parseInt(id), req.file);

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

    console.log(file)


    try {
        const {data, error} = await supabase
            .storage
            .from('drive-hive')
            .download(`uploads/${file.name}`);

        if (error) {
            console.error(error.message);
            return res.status(500).json({ error: error.message });
        }

        if (!data) {
            console.log(data);
        }

        const fileBuffer = Buffer.from(await data.arrayBuffer());

        const fileExtension = file.name.split('.').pop();
        const contentType = mime.lookup(fileExtension) || 'application/octet-stream';

        const encodedFileName = encodeURIComponent(file.name);

        res.setHeader('Content-Disposition', `attachment; filename="${encodedFileName}"`);
        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Length', fileBuffer.length);

        res.send(fileBuffer);

    } catch (e) {
        console.error(e);
        res.status(500).json({ error: e });
    }
}