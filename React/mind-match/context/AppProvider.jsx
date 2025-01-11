import {createContext, useContext, useState} from "react";


export const AppContext = createContext();

export const useAppContext = () => useContext(AppContext)

export const AppProvider = ({children}) => {

    const [points, setPoints] = useState(0);
    const [clickedPokemon, setClickedPokemon] = useState({});
    const [highScore, setHighScore] = useState(0);


    return (
        <AppContext.Provider value={{
            points,
            setPoints,
            clickedPokemon,
            setClickedPokemon,
            highScore,
            setHighScore
        }}>
            {children}
        </AppContext.Provider>
    )

}