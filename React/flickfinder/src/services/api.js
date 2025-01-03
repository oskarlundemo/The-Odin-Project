
const API_KEY = '12c675054fe5db4b64e225714b052ab1';
const BASE_URL =  'https://api.themoviedb.org/3'



export const getPopularMovies = async () => {

    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();

    console.log(data.results)

    return data.results;
}


export const searchMovies = async (searchQuery) => {

    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURI(searchQuery)}`);
    const data = await response.json();


    return data.results;
}
