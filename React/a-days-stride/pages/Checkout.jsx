import {useGarmentProvider} from "../context/GarmentProvider.jsx";
import {sekConverter} from "../src/components/ProductCard.jsx";
import {OrderInformation} from "../src/components/OrderInformation.jsx";
import '../src/styles/Checkout.css'


export const Checkout = () => {


    const {cart} = useGarmentProvider();


    return (
        <div className="checkout-page-container">

            <h1>Checkout</h1>
            <div className="checkout-section-container">

                <section className="item-container">
                    {cart.map((item) => {
                        return (
                            <div key={item.id} className="item-card">
                                <img src={item.image} alt={item.title}/>

                                <div className="item-text-container">

                                <div className="item-details">
                                    <h3>{item.title}</h3>
                                    <p>{sekConverter(item.price)} KR</p>
                                </div>
                                <div className="item-controls-container">


                                    <div className="item-quantity">

                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                                             width="24px" fill="#434343">
                                            <path d="M200-440v-80h560v80H200Z"/>
                                        </svg>

                                        <span>1</span>

                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                                             width="24px" fill="#434343">
                                            <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/>
                                        </svg>
                                    </div>


                                    <span>Remove</span>
                                </div>

                                </div>

                            </div>
                        )
                    })}
                </section>


                <section className="order-info-container">
                    <OrderInformation/>
                </section>

            </div>

        </div>
    )
}