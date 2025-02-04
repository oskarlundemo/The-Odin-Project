

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
    if (!user) throw new Error('Incorrect username or password');
    return user;
}

const findLoginId = async (id) => {
    const user = await prisma.user.findUnique({
        where: {
            id: id
        }
    })
    if (!user) throw new Error('Incorrect username or password');
    return user;
}
module.exports = {
    addNewUser,
    findLoginId,
    findLoginUsername
}