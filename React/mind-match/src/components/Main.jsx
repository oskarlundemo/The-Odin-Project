import {useEffect, useState} from "react";
import {getPokemons} from "../services/api.js";
import {PokeCard} from "./PokeCard.jsx";
import '../styles/Main.css'


export const Main = () => {

    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        const loadPokemonsData = async () => {
            const pokeData = await getPokemons();
            setPokemons(pokeData);
        };
        loadPokemonsData();
    }, []);

    return (
        <main className="main-content">
                {pokemons.map(pokemon => (
                    <PokeCard pokemon={pokemon} key={pokemon.id}/>
                ))}
        </main>
    )
}