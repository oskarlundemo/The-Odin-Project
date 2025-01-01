import {Link} from "react-router-dom";
import '../styles/NavBar.css';


export default function NavBar () {
    return (

        <nav className="navbar">
             <ul className="navbar-list">
                 <Link to="/">Home</Link>
                 <Link to="/favorites">Favorites</Link>
             </ul>
        </nav>
    )
}