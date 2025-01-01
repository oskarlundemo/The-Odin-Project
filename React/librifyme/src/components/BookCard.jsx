import '../styles/BookCard.css'


export default function BookCard ({book}) {


    function onFavoriteClick () {
        alert('Favorite clicked')
    }


    return (
        <div className="book-card">
            <div className="book-cover">
                <img src={book.volumeInfo.imageLinks?.thumbnail || 'default-thumbnail.jpg'} alt={book.volumeInfo.title}/>
                <div className="book-overlay">
                    <button className="favorite-button" onClick={onFavoriteClick}>❤️</button>
                </div>
            </div>

            <div className="book-info">
                <h2>{book.volumeInfo.title} - {book.volumeInfo.authors}</h2>
                <p>{book.description}</p>
            </div>
        </div>
    )
}