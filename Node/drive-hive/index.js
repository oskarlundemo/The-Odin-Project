

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

    console.log('I find ' + id)
    const user = await prisma.user.findUnique({
        where: {
            id: id
        }
    })
    if (!user) return null;
    return user;
}



const createNewFolder = async (folderName, req, res) => {
    await prisma.folder.create({
        data: {
            name: folderName,
        }
    })


}


module.exports = {
    addNewUser,
    findLoginId,
    findLoginUsername,
    createNewFolder
}