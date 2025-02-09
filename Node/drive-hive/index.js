

const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()


/**
 *
 * Login
 * @param user
 * @returns {Promise<Prisma.Prisma__UserClient<GetResult<Prisma.$UserPayload<DefaultArgs>, {data: {firstname, lastname, email, username, password}}, "create", Prisma.PrismaClientOptions>, never, DefaultArgs, Prisma.PrismaClientOptions>>}
 */


const addNewUser = async (user) => await prisma.user.create({
    data: {
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        username: user.username,
        password: user.password,
    }
})

const findLoginUsername = async (username) => {
    const user = await prisma.user.findUnique({
        where: {
            username: username
        }
    })
    if (!user) return null;
    return user;
}

const findLoginId = async (id) => {
    const user = await prisma.user.findUnique({
        where: {
            id: id
        }
    })
    if (!user) return null;
    return user;
}


/**
 * Folder
 * @param folderName
 * @param user
 * @param req
 * @param res
 * @returns {Promise<void>}
 */

const createNewFolder = async (folderName, user, req, res) => {
    await prisma.folder.create({
        data: {
            name: folderName,
        }
    })


    const latestFolder = await prisma.folder.findMany({
        orderBy: {
            id: 'desc',
        }, take: 1
    })

    const latestFolderData = latestFolder[0];

    await prisma.user_Folder.create({
        data: {
            folder_id: latestFolderData.id,
            user_id: user.id,
        }
    })
}

const getUserFolders = async (user, req, res) => {
    const userFolders = await prisma.user_Folder.findMany({
        where: {user_id: user.id,},
        include: {
            folder: true,
        }
    })
    const folders = userFolders.map(uf => uf.folder);
    return folders;
}

const deleteFolder = async (folderId, userID) => {

    await prisma.user_Folder.delete({
        where: {
            user_id_folder_id: {
                folder_id: parseInt(folderId),
                user_id: userID
            }
        }
    })

    await prisma.folder.delete({
        where: {
            id: parseInt(folderId),
        }
    })
}

const loadFolder = async (folderId) => {
    try {
        return await prisma.folder.findUnique({
            where: {id: folderId},
        });
    } catch (e) {
        console.error(e);
        return null;
    }
}





/**
 * Files
 * @param folderId
 * @returns {Promise<GetFindResult<Prisma.$FilePayload<DefaultArgs>, {where: {folder_id}}, Prisma.PrismaClientOptions>[]>}
 */


const loadFiles = async (folderId) => {
    return await prisma.file.findMany({
        where: {
            folder_id: folderId
        }
    })
}


const saveFile = async (folderId, file, req, res) => {
    await prisma.file.create({
        data: {
            name: file.originalname,
            size: file.size,
            folder_id: folderId,
        }
    })
}

const deleteFileFromDB = async (fileId, req, res) => {
    await prisma.file.delete({
        where: {
            id: fileId,
        }
    })
}

const getSingleFileFromDB = async (fileId, req, res) => {
    return await prisma.file.findUnique({
        where: {
            id: fileId
        }
    })
}



module.exports = {
    addNewUser,
    findLoginId,
    findLoginUsername,
    createNewFolder,
    getUserFolders,
    deleteFolder,
    loadFolder,
    loadFiles,
    saveFile,
    deleteFileFromDB,
    getSingleFileFromDB
}