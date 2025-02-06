

const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()


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


const createNewFolder = async (folderName, user, req, res) => {

    console.log(user)

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


module.exports = {
    addNewUser,
    findLoginId,
    findLoginUsername,
    createNewFolder,
    getUserFolders,
}