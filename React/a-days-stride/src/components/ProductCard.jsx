
import '../styles/ProductCard.css'
import {useGarmentProvider} from "../../context/GarmentProvider.jsx";


export const ProductCard = ({product}) => {

    const {shortenTitle} = useGarmentProvider()


    return (
        <div className="product-card">
            <img src={`${product.image}`} alt={`${product.title}`}/>
            <div className="product-text">
            <p>{shortenTitle(product.title)}</p>
                <p>{sekConverter(product.price)} SEK</p>
            </div>
        </div>
    )
}


export const sekConverter = (price) => {
    const convertedPrice = price * 9.52;
    const rounded = convertedPrice % 10;
    return (convertedPrice - rounded).toFixed(0);
}