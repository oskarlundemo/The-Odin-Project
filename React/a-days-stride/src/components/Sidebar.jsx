
import '../styles/Sidebar.css';
import {useGamentContext} from "../../context/GarmentProvider.jsx";
import {Link} from "react-router-dom";

export const Sidebar = ({count}) => {
    const {sideBar, toggleSidebar} = useGamentContext();


    return (
        <aside className={`sidebar ${sideBar ? 'show' : ''}`}>

            <div className="sidebar-header">
                <p>Cart ({count})</p>

                <svg onClick={toggleSidebar} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                     fill="#434343">
                    <path
                        d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
                </svg>
            </div>

            <div className="sidebar-main">

            </div>


            <div className="sidebar-footer">

                <Link to="/checkout">
                <button className="checkout-button">
                    <div>
                        <p>Checkout</p>

                        <p>0 SEK</p>
                    </div>
                </button>
                </Link>


                <button className="continue-shopping-button">
                    <p>
                        Continue Shopping
                    </p>
                </button>
            </div>

        </aside>
    )
}