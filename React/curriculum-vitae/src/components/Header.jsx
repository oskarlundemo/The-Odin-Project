import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext.jsx";
import '../styles/Header.css'
import Contacts from "./Contacts.jsx";




export const Header = () => {
    const {inputValue} = useContext(AppContext);

    return (
        <header className="site-header">
            <h1>{(inputValue.firstName || inputValue.lastName) ? `${inputValue.firstName} ${inputValue.lastName}` : ""} </h1>
            <Contacts/>
        </header>
    )
}

export default Header;