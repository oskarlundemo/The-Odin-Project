

const authors = [
    {id: 1, name: "Tom Cruise"},
    {id: 2, name: "Christian Bale"},
    {id: 3, name: "Sylvester Stallone"},
]


const getAuthorById = async (id) => {
    return authors.find(author => author.id === id)
}


module.export = {getAuthorById}