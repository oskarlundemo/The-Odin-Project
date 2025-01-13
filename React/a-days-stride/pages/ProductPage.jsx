import {useLocation} from "react-router-dom";
import '../src/styles/ProductPage.css'
import {sekConverter} from "../src/components/ProductCard.jsx";

export const ProductPage = () => {


    const location = useLocation();
    const garment = location.state.garment;


    return (
        <div className="main-product-page">

            <div className="product-image-container">
                <img src='../public/default.jpg' alt={garment.title}/>
            </div>


            <div className="product-info">

                <div className="product-header">
                    <h2>{garment.title}</h2>
                    <h2>{garment.review}</h2>
                </div>

                <div className="product-description">
                    <p>{garment.description}</p>
                </div>



                <button className = "btn">
                    <p>Add to cart</p>
                    <p>{sekConverter(garment.price)} KR</p>
                </button>


                <ul className="product-more-info">

                    <div>
                        <li>
                            <div>
                                <p>Product description</p>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                                     width="24px" fill="#434343">
                                    <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/>
                                </svg>
                            </div>
                        </li>
                    </div>


                    <div>
                        <li>
                            <div>
                                <p>Care instructions</p>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                                     width="24px" fill="#434343">
                                    <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/>
                                </svg>
                            </div>
                        </li>
                    </div>


                    <div>
                        <li>
                            <div>
                                <p>Shipping</p>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                                     width="24px" fill="#434343">
                                    <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/>
                                </svg>
                            </div>
                        </li>
                    </div>

                </ul>


            </div>

        </div>
    )
}