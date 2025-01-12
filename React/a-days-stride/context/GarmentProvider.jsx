import {createContext, useContext, useState} from "react";


const GarmentContext = createContext();

export const useGamentContext = () => useContext(GarmentContext)

export const GarmentProvider = ({children}) => {



    const [sideBar, showSidebar] = useState(false);

    const toggleSidebar = () => {
        showSidebar(!sideBar)
    }


    const value = {
        sideBar,
        toggleSidebar,
    }

    return (
        <GarmentContext.Provider value={value}>
            {children}
        </GarmentContext.Provider>
    )
}