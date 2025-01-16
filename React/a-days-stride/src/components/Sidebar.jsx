
import '../styles/Sidebar.css';
import {useGarmentProvider} from "../../context/GarmentProvider.jsx";
import {Link} from "react-router-dom";
import {sekConverter} from "./ProductCard.jsx";

export const Sidebar = ({count}) => {
    const {sideBar, toggleSidebar, toggleOverlay, cart, sumOrder, numberItems} = useGarmentProvider();



    return (
        <aside className={`sidebar ${sideBar ? 'show' : ''}`}>

            <div className="sidebar-header">
                <p>Cart ({numberItems})</p>

                <svg onClick={() => {toggleSidebar(); toggleOverlay();}} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                     fill="#434343">
                    <path
                        d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
                </svg>
            </div>


            <div className="sidebar-main">

                {cart.map((item) => {
                    return (
                        <div key={item.id} className="cart-item">
                            <img src={item.image} alt={item.title}/>
                            <div>
                                <p>{item.title}</p>
                                <p>{sekConverter(item.price)} SEK</p>
                            </div>
                        </div>
                    )
                })}

            </div>


            <div className="sidebar-footer">

                <Link to="/checkout">
                <button className="checkout-button">
                    <div>
                        <p>Checkout</p>
                        <p>{sumOrder} SEK</p>
                    </div>
                </button>
                </Link>

                <div>
                <button className="continue-shopping-button">
                    <p>
                        Continue Shopping
                    </p>
                </button>
                </div>
            </div>

        </aside>
    )
}