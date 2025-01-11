import {getPokemons} from "../services/api.js";
import {PokeCard} from "./PokeCard.jsx";
import '../styles/Main.css'
import {useEffect, useState} from "react";


export const Main = () => {

    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        const loadPokemonsData = async () => {
            const pokeData = await getPokemons();
            setPokemons(pokeData);
        };
        loadPokemonsData();
    }, []);

    const shufflePokedeck = () => {
        const shuffled = [...pokemons].sort(() => Math.random() -0.5)
        setPokemons(shuffled);
    }


    return (
        <main className="main-content">
                {pokemons.map(pokemon => (
                    <PokeCard
                        pokemon={pokemon}
                        key={pokemon.id}
                        shufflePokemons={shufflePokedeck}
                    />))
                }
        </main>
    )
}