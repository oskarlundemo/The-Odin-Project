import {sekConverter} from "../components/ProductCard.jsx";

const MALE_URL = 'https://fakestoreapi.com/products/category/men\'s%20clothing?limit=4'
const FEMALE_URL = 'https://fakestoreapi.com/products/category/women\'s%20clothing?limit=4'


export const getMaleClothing = async () => {
    try {
        const response = await fetch(MALE_URL);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (err) {
        console.error("Fel" + err);
    }
}


export const getFemaleClothing = async () => {
    try {
        const response = await fetch(FEMALE_URL);
        const data = await response.json();

        data.forEach((item) => {
            item.price = sekConverter(item.price)
        })

        console.log(data);
        return data;
    } catch (err) {
        console.error("Fel" + err);
    }
}