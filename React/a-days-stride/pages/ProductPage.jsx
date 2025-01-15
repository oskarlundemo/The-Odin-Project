import {useLocation} from "react-router-dom";
import '../src/styles/ProductPage.css'
import {sekConverter} from "../src/components/ProductCard.jsx";
import {useGarmentProvder} from "../context/GarmentProvider.jsx";
import {useEffect, useState} from "react";

export const ProductPage = () => {

    const {addGarmentToCart, sumCart} = useGarmentProvder();

    const location = useLocation();
    const garment = location.state.garment;

    const [stars, setStars] = useState([]);
    const [activeIndex, setActiveIndex] = useState(null);

    useEffect(() => {
        const starArray = Array(Math.round(garment.rating.rate)).fill('*')
        setStars(starArray)
    }, [])


    const toggleDropis = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    }



    return (
        <div className="main-product-page">

            <div className="product-image-container">
                <img src='../public/default.jpg' alt={garment.title}/>
            </div>

            <div className="product-info">

                <div className="product-header">
                    <h2>{garment.title}</h2>
                    <div className="star-container">
                        {stars.map((star, index) => (
                            <p key={index}>{star}</p>
                        ))}
                    </div>
                </div>

                <button className="btn" onClick={() => {addGarmentToCart(garment)}}>
                    <p>Add to cart</p>
                    <p>{sekConverter(garment.price)} KR</p>
                </button>

                <div className="product-details">

                    <div className="product-description" key={1} onClick={() => toggleDropis(1)}>
                        <div className="product-details-header">
                            <p>Product description</p>

                            {activeIndex === 1 ? (
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                                     width="24px" fill="#434343">
                                    <path d="M240-120v-80h480v80H240Z"/>
                                </svg>)
                                : (<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                                        width="24px" fill="#434343">
                                    <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/>
                                </svg>)
                            }
                        </div>

                        <ul className={`sub-menu ${activeIndex === 1 ? 'show' : ''}`}>
                            <div>
                                <li>
                                <p>{garment.description}</p>
                                </li>
                            </div>
                        </ul>
                    </div>


                    <div className="product-instructions" key={2} onClick={() => toggleDropis(2)}>

                        <div className="product-details-header">
                            <p>Care instructions</p>
                            {activeIndex === 2 ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                                         width="24px" fill="#434343">
                                        <path d="M240-120v-80h480v80H240Z"/>
                                    </svg>)
                                : (<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                                        width="24px" fill="#434343">
                                    <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/>
                                </svg>)
                            }
                        </div>

                        <ul className={`sub-menu ${activeIndex === 2 ? 'show' : ''}`}>
                            <div>
                                <li>
                                    <p>
                                        Washing Instructions:

                                        Wash garments inside out to protect the fabric and any embellishments.
                                        Use a gentle cycle with cold or lukewarm water to prevent shrinking or fading.
                                        Separate colors to avoid color bleeding.
                                    </p>
                                </li>
                            </div>
                        </ul>
                    </div>


                    <div className="product-shipping" key ={3} onClick={() => toggleDropis(3)}>
                        <div className="product-details-header">
                            <p>Shipping</p>
                            {activeIndex === 3 ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                                         width="24px" fill="#434343">
                                        <path d="M240-120v-80h480v80H240Z"/>
                                    </svg>)
                                : (<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                                        width="24px" fill="#434343">
                                    <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/>
                                </svg>)
                            }
                        </div>

                        <ul className={`sub-menu ${activeIndex === 3 ? 'show' : ''}`}>
                            <div>
                                <li>
                                    <p>Free standard shipping on orders above:
                                        1500 SEK
                                        Shipping within Sweden:
                                        2-3 business days
                                    </p>
                                </li>
                            </div>
                        </ul>
                    </div>

                </div>


            </div>

        </div>
    )
}