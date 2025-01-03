import {createContext, useState, useEffect, useContext} from "react";



const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext)

export const MovieProvider = ({children}) => {

    const [favorites, setFavorite] = useState([])

    useEffect(() => {
        const savedFavorites = localStorage.getItem('favorites')

        if (savedFavorites) {
            setFavorite(JSON.parse(savedFavorites))
        }
    }, [])


    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])


    const addToFavorite = (movie) => {
        setFavorite([prev => [...prev, movie]])
    }

    const removeFromFavorite = (movieId) => {
        setFavorite(prev => prev.filter(movie => movie.id!== movieId))
    }

    const isFavorite = (movieId) => {
        return favorites.some(movie => movie.id === movieId)
    }

    const value = {
        favorites,
        addToFavorite,
        removeFromFavorite,
        isFavorite,  // helper function to check if a movie is already in favorites list  // or not.  // It returns a boolean value.  // It uses the some() method to iterate over the favorites array and check if the movie id is present.  // If it finds a match, it returns true; otherwise, it returns false.  // This way, we can easily check if a movie is in the favorites list or not.  // This function is
    }

    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}