import React, {createContext, useState} from "react";


export const AppContext = createContext();

export const AppProvider = ({ children }) => {

    const [details, setDetails] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
     });


    return (
        <AppContext.Provider value={{ inputValue: details, setInputValue: setDetails }}>
            {children}
        </AppContext.Provider>
    );
};