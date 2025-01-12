import {NavBar} from "./NavBar.jsx";
import '../styles/Header.css';

export const Header = () => {
    return (
        <header className="site-header">

            <div className="sub-header">
                <h2>
                    Seasonal Sale is now live.
                </h2>
            </div>

            <div className="main-header">
                <NavBar/>
            </div>
        </header>
    )
}