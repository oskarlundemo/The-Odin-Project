import MovieCard from "../src/components/MovieCard.jsx";
import {useEffect, useState} from "react";
import {getPopularMovies, searchMovies} from "../src/services/api.js";
import '../src/styles/Home.css'
import '../src/styles/Form.css';

export default function Home () {

    const [searchQuery, setSearchQuery] = useState('');
    const [movies, setMovies] = useState([]);

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const movies = await getPopularMovies();
                setMovies(movies);
            } catch (err) {
                setError('Failed to load popular movies');
                console.error(err);
            } finally {
                setLoading(false);
            }
        }
        loadPopularMovies();
    }, []);


    const handleSearch = async (e) => {
        e.preventDefault();
        if (!searchQuery.trim()) return
        if (loading) return

        setLoading(true)
        try {
            const searchResults = await searchMovies(searchQuery)
            setMovies(searchResults)
            setError(null)
        } catch (err) {
            console.log(err)
            setError("Failed to search movies...")
        } finally {
            setLoading(false)
        }
    };


    return (

        <main className="home">

            <form onSubmit={handleSearch} className="search-form">

                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                     fill="#434343">
                    <path
                        d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/>
                </svg>

                <input
                    type="text"
                    placeholder="Search for a movie..."
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />

                <button type="submit" className="search-button">Search</button>
            </form>


            {loading ? (
                    <div className="loading">Loading...</div>) :
                <div className="movie-grid">
                    {movies.map(movie => (
                        <MovieCard movie={movie} key={movie.id}/>
                    ))}
                </div>
            }

        </main>
    )
}