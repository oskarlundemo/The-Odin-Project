import React, {createContext, useState} from "react";


export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [inputValue, setInputValue] = useState("");

    return (
        <AppContext.Provider value={{ inputValue, setInputValue }}>
            {children}
        </AppContext.Provider>
    );
};