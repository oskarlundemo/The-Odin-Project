
import '../styles/NavBar.css';
import {Link} from "react-router-dom";
import {useGarmentProvider} from "../../context/GarmentProvider.jsx";


export const NavBar = () => {

    const {toggleSidebar, toggleOverlay, numberItems} = useGarmentProvider();


    return (
        <nav className="navbar">
            <div className="drop-down-container">
                <ul className="drop-down-list">
                    <li>Men</li>
                    <li>Women</li>
                    <li>Seasonal Sale</li>
                </ul>
            </div>

            <div className="page-title">
                <Link to="/">
                    <h1>A DAY´S STRIDE</h1>
                </Link>
            </div>
            <div className="checkout-container">

                <p>SE/SEK</p>

                <div>

                    <span>{numberItems}</span>

                    <svg onClick={() => {
                        toggleSidebar();
                        toggleOverlay();
                    }} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                         fill="#434343">
                        <path
                            d="M240-80q-33 0-56.5-23.5T160-160v-480q0-33 23.5-56.5T240-720h80q0-66 47-113t113-47q66 0 113 47t47 113h80q33 0 56.5 23.5T800-640v480q0 33-23.5 56.5T720-80H240Zm0-80h480v-480h-80v80q0 17-11.5 28.5T600-520q-17 0-28.5-11.5T560-560v-80H400v80q0 17-11.5 28.5T360-520q-17 0-28.5-11.5T320-560v-80h-80v480Zm160-560h160q0-33-23.5-56.5T480-800q-33 0-56.5 23.5T400-720ZM240-160v-480 480Z"/>
                    </svg>
                </div>

            </div>

        </nav>
    )
}