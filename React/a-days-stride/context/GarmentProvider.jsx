import {createContext, useContext, useState} from "react";
import {sekConverter} from "../src/components/ProductCard.jsx";


const GarmentContext = createContext();

export const useGarmentProvder = () => useContext(GarmentContext)

export const GarmentProvider = ({children}) => {

    const [cart, setCart] = useState([]);
    const [sumOrder, setOrderSum] = useState([0])

    const addGarmentToCart = (garment) => {

        setCart((prev) => {
            const updatedCart = [...prev, garment];

            let newOrderSum = 0;
            updatedCart.forEach((item) => {
                newOrderSum += parseInt(sekConverter(item.price))
            })

            setOrderSum(newOrderSum);

            return updatedCart
        })

    }



    const [sideBar, showSidebar] = useState(false);
    const [overlay, showOverlay] = useState(false);

    const toggleSidebar = () => {showSidebar(!sideBar)}
    const toggleOverlay = () => {showOverlay(!overlay)}

    const value = {
        sideBar,
        overlay,
        cart,
        sumOrder,
        toggleSidebar,
        toggleOverlay,
        addGarmentToCart,
    }

    return (
        <GarmentContext.Provider value={value}>
            {children}
        </GarmentContext.Provider>
    )
}