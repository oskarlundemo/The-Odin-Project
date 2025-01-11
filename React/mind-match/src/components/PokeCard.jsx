
import '../styles/PokeCard.css'




export const PokeCard = ({pokemon}) => {

    return (
        <div className="pokemon-card">
            <img src={pokemon.image} alt={pokemon.name} />
            <h2>{pokemon.name}</h2>
        </div>
    )
}


