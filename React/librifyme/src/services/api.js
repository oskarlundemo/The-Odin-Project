

const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q='

export const getBooks = async (searchQuery) => {

    const response = await fetch(`${BASE_URL}${searchQuery}`);
    const data = await response.json();
    console.log(data.items);

    return data.items;
}