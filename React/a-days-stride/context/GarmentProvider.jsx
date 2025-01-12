import {createContext, useContext, useState} from "react";


const GarmentContext = createContext();

export const useGarmentProvder = () => useContext(GarmentContext)

export const GarmentProvider = ({children}) => {

    const [sideBar, showSidebar] = useState(false);
    const [overlay, showOverlay] = useState(false);

    const toggleSidebar = () => {showSidebar(!sideBar)}
    const toggleOverlay = () => {showOverlay(!overlay)}

    const value = {
        sideBar,
        overlay,
        toggleSidebar,
        toggleOverlay,
    }

    return (
        <GarmentContext.Provider value={value}>
            {children}
        </GarmentContext.Provider>
    )
}