import {useContext} from "react";
import { AppContext } from "../../context/AppContext.jsx";
import '../styles/NavBar.css'
import {Education} from "./Education.jsx";
import {Work} from "./Work.jsx";

export const NavBar = ({onAddWork, onAddEducation}) => {

    const {setPersonalInfo: setDetails, personalInfo: details} = useContext(AppContext);

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    return (
        <nav className="sidebar">

            <div className="personal-details">
            <h2>Personal Details</h2>
            <form className="personal-info">

                <label>First name</label>
                <input
                    type="text"
                    name="firstName"
                    placeholder="First name"
                    className="personal-info-input"
                    onChange={handleInputChange}
                    value={details.firstName}
                />

                <label>Last name</label>
                <input
                    type="text"
                    name="lastName"
                    placeholder="Last name"
                    className="personal-info-input"
                    onChange={handleInputChange}
                    value={details.lastName}
                />

                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    placeholder="john@domain.com"
                    className="personal-info-input"
                    onChange={handleInputChange}
                    value={details.email}
                />

                <label>Phone</label>
                <input
                    type="text"
                    name="phone"
                    placeholder="+46 070 213 ..."
                    className="personal-info-input"
                    onChange={handleInputChange}
                    value={details.phone}
                />

                <label>City</label>
                <input
                    type="text"
                    name="city"
                    placeholder="Last name"
                    className="personal-info-input"
                    onChange={handleInputChange}
                    value={details.city}
                />
              </form>
            </div>

            <Education onAddEducation={onAddEducation}/>
            <Work onAddEducation={onAddWork}/>

        </nav>
    )

}
export default NavBar;