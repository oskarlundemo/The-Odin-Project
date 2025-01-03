import {useContext} from "react";
import { AppContext } from "../../context/AppContext.jsx";


export const NavBar = () => {

    const {setInputValue} = useContext(AppContext);

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    return (
        <nav className="sidebar">
            <form className="personal-info">
                <h2>Personal Details</h2>

                <input
                    type="text"
                    placeholder="First name"
                    className="personal-info-input"
                    onChange={handleInputChange}
                />

            </form>

        </nav>
    )

}
export default NavBar;