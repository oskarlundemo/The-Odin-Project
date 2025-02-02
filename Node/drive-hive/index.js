

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

module.exports = {
    addNewUser,
}