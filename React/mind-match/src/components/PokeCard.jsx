
import '../styles/PokeCard.css'
import {AppContext} from "../../context/AppProvider.jsx";
import {useContext} from "react";




export const PokeCard = ({pokemon, shufflePokemons}) => {

    const {setPoints, clickedPokemon, setClickedPokemon, highScore, setHighScore} = useContext(AppContext);

    const handleClick = () => {
        if (!clickedPokemon[pokemon.id]) {
            setPoints((prev) => {
                const newPoints = prev + 1;
                if (newPoints > highScore) {
                    setHighScore(newPoints);
                }

                return newPoints;
            })
            setClickedPokemon((prev) => ({
                ...prev,
                [pokemon.id]: true,
            }));
        } else {
            setPoints(0);
            setClickedPokemon({});
        }
    }

    return (
        <div onClick={() => {
            handleClick(),
            shufflePokemons();
        }} className="pokemon-card">
            <img src={pokemon.image} alt={pokemon.name}/>
            <h2>{pokemon.name}</h2>
        </div>
    )
}


