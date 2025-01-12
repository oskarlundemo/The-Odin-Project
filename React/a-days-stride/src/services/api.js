const BASE_URL = 'https://fakestoreapi.com/products/1'


export const getGarments = async () => {
    const response = await fetch(BASE_URL, { mode: 'no-cors' });
    const data = await response.json();
    console.log(data.result);
}