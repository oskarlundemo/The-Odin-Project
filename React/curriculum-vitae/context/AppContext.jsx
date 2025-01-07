import React, {createContext, useState} from "react";
import {ExperienceCard} from "../src/components/ExperienceCard.jsx";
import {SectionCard} from "../src/components/SectionCard.jsx";


export const AppContext = createContext();

export const AppProvider = ({ children }) => {



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
        <AppContext.Provider value={{personalInfo: details, setPersonalInfo: setDetails, experienceInfo: input, setExperienceInfo: setInput}}>
            {children}
        </AppContext.Provider>
    );
};