const BASE_URL = 'https://fakestoreapi.com/products'


export const getGarments = async () => {
    try {
        const response = await fetch(BASE_URL);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (err) {
        console.error("Fel" + err);
    }
}