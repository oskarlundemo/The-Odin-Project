
import '../styles/ProductCard.css'


export const ProductCard = ({product}) => {

    const handleTitleLenght = (title) => {
        if (title.length > 20) {
            return title.slice(0, 20) + '...'
        }
        return title;
    }


    //   <img src={`${product.image}`} alt={`${product.title}`}/>
    return (
        <div className="product-card">
            <img src='../../public/default.jpg' alt={`${product.title}`}/>
            <div className="product-text">
                <h3>{handleTitleLenght(product.title)}</h3>
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

