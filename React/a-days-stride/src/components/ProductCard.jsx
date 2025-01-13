
import '../styles/ProductCard.css'


export const ProductCard = ({product}) => {

    const sekConverter = (price) => {
        const convertedPrice = price * 9.52;
        const rounded = convertedPrice % 10;

        return (convertedPrice - rounded).toFixed(0);
    }

    return (
        <div className="product-card">
            <img src={`${product.image}`} alt={`${product.title}`}/>


            <div className="product-text">
                <h3>{product.title}</h3>
                <p>{sekConverter(product.price)} SEK</p>
            </div>

            <button>Add to Cart</button>
        </div>
    )
}


