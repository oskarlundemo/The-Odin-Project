import BookCard from "../src/components/BookCard.jsx";
import {useEffect, useState} from "react";
import {getBooks} from "../src/services/api.js";

export default function Home () {

    const [searchQuery, setSearchQuery] = useState('');
    const [books, setBooks] = useState([]);


    useEffect(() => {
        const getBooks = async () => {
            try {
                const books = await getBooks();
                setBooks(books);
            } catch (err) {
                console.error(err);

            }
        }
    })


    const handleSearch = async (e) => {
        e.preventDefault();
        if (!searchQuery.trim()) return


        try {
            const books = await getBooks(searchQuery);
            setBooks(books);
        } catch (err) {
            console.error(err);
            setBooks([]);
            alert('No results found');
        }
    }


    return (

        <main className="home">

            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    placeholder="Search for a book..."
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />

                <button type="submit" className="search-button">Search</button>
            </form>


            <div className="movies-gird">
                {books.map(book => (
                    <BookCard book={book} key={book.id}/>
                ))}
            </div>


        </main>
    )
}