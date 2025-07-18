import React, {createContext, useState} from "react";


export const AppContext = createContext();

export const AppProvider = ({ children }) => {



    const [hiddenCustom, showCustom] = useState(false);


    const [input, setInput] = useState({
        organization: '',
        occupation: '',
        startdate: '',
        enddate: '',
        description: '',
    });


    const [details, setDetails] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
     });


    return (
        <AppContext.Provider value={{personalInfo: details,
            setPersonalInfo: setDetails,
            experienceInfo: input,
            setExperienceInfo: setInput,
            hiddenCustom: hiddenCustom,
            showCustom: showCustom,
        }}>
            {children}
        </AppContext.Provider>
    );
};