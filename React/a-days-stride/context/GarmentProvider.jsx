import {createContext, useContext, useState} from "react";
import {sekConverter} from "../src/components/ProductCard.jsx";


const GarmentContext = createContext();

export const useGarmentProvider = () => useContext(GarmentContext)

export const GarmentProvider = ({children}) => {

    const [cart, setCart] = useState([]);
    const [sumOrder, setOrderSum] = useState([0])
    const [numberItems, setNumberItems] = useState(0);

    const addGarmentToCart = (garment) => {
        setCart((prev) => {
            const updatedCart = [...prev, garment];

            let newOrderSum = 0;
            updatedCart.forEach((item) => {
                newOrderSum += parseInt(sekConverter(item.price))
            })

            setNumberItems(updatedCart.length);
            setOrderSum(newOrderSum);

            return updatedCart
        })
    }


    const shortenTitle = (title) => {

        let blankSpace = 3;
        console.log(title.trim())

        for (let i = 0; i < title.length; i++) {
            if (title[i] === " ") {
              blankSpace--;
            }

            if (blankSpace === 0 || i + 1  === title.length) {
                return title.slice(0, i + 1)
            }
        }
    }


    const removeGarmentFromCart = (id) => {
        setCart((prev) => {
            const updatedCart = prev.filter((item) =>
                item.id!== id
            );

            let newOrderSum = 0;
            updatedCart.forEach((item) => {
                newOrderSum += parseInt(sekConverter(item.price))
            })

            setNumberItems(updatedCart.length);
            setOrderSum(newOrderSum);

            return updatedCart
        })
    }

    const [details, setDetails] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        zip: '',
    });



    const [sideBar, showSidebar] = useState(false);
    const [overlay, showOverlay] = useState(false);

    const toggleSidebar = () => {showSidebar(!sideBar)}
    const toggleOverlay = () => {showOverlay(!overlay)}

    const value = {
        sideBar,
        overlay,
        cart,
        sumOrder,
        numberItems,
        details,
        setDetails,
        toggleSidebar,
        toggleOverlay,
        addGarmentToCart,
        removeGarmentFromCart,
        shortenTitle
    }

    return (
        <GarmentContext.Provider value={value}>
            {children}
        </GarmentContext.Provider>
    )
}