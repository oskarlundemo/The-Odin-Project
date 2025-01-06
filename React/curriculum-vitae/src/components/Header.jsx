import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext.jsx";
import '../styles/Header.css'
import Contacts from "./Contacts.jsx";




export const Header = () => {
    const {personalInfo} = useContext(AppContext);

    return (
        <header className="site-header">
            <h1>{(personalInfo.firstName || personalInfo.lastName) ? `${personalInfo.firstName} ${personalInfo.lastName}` : ""} </h1>
            <Contacts/>
        </header>
    )
}

export default Header;