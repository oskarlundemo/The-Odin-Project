import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext.jsx";



export const Header = () => {
    const {inputValue} = useContext(AppContext);

    return (
        <header>
            <h1>{`${inputValue}`}</h1>
        </header>
    )
}

export default Header;