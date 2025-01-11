
import '../styles/Header.css'
import {useContext} from "react";
import {AppContext} from "../../context/AppProvider.jsx";



export const Header = () => {

    const {points, highScore} = useContext(AppContext);

    return (
        <header className="site-header">
            <h1>Pokémon Memory Game</h1>
            <h2>Record: {highScore}</h2>
            <h2>Score: {points}</h2>
            <h2>Get points by clicking on a Pokémon but don't click on any more than once!</h2>
        </header>
    )
}