
import '../src/styles/Favorites.css'
import {useMovieContext} from "../context/MovieContext.jsx"
import MovieCard from "../src/components/MovieCard.jsx";

export default function Favorites () {

    const {favorites} = useMovieContext();

    if (favorites) {
        return (
            <div className="movie-grid">
                {favorites.map(movie => (
                    <MovieCard movie={movie} key={movie.id}/>
                ))}
            </div>
        )
    }

    return (
        <div className="favorites">
            <h2>No favorite books yet... 😳</h2>
            <p>Add some books to your favorites list by clicking on the heart icon on the book cards.</p>
        </div>
    )
}
