
const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

export const getPokemons = async () => {
    try {
        const response = await fetch(`${BASE_URL}?limit=10`);

        const data = await response.json();
        const pokemons = data.results;

        const detailedPokemons = await Promise.all(pokemons.map(async (poke) => {
            const pokeDetailedResponse = await fetch(poke.url);
            const pokeDetailedData = await pokeDetailedResponse.json();

            return {
                name: poke.name.charAt(0).toUpperCase() + poke.name.slice(1),
                image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeDetailedData.id}.png`,
                id: pokeDetailedData.id,
            }
        }))

        return detailedPokemons;

    } catch (e) {
        console.error('Error fetching Pokémon:', e);
        return [];
    }
};
