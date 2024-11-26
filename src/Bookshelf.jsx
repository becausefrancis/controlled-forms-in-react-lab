import { useState } from 'react';

const Bookshelf = () => {
    const [books, setBooks] = useState([]);
    const [newBook, setNewBook] = useState({
        title: '',
        author: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewBook({ ...newBook, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newBook.title && newBook.author) {
            setBooks([...books, newBook]);
            setNewBook({ title: '', author: ''});
        }
    };

    return (
        <div className="bookshelfDiv">
            <div className="formDiv">
                <h3>Add a Book</h3>
                
                <form onSubmit={handleSubmit}>
                    <label htmlFor="title">Title: </label>
                    <input 
                        id="title"
                        name="title"
                        value={newBook.title}
                        onChange={handleInputChange}
                        required
                    />

                    <label htmlFor="author">Author: </label>
                    <input 
                        id="author"
                        name="author"
                        value={newBook.author}
                        onChange={handleInputChange}
                        required
                    />

                    <button type='submit'>Add Book</button>
                </form>
            </div>
            <div className="bookCardsDiv">
                <h1>Book Cards</h1>
                <ul>
                    {books.map((book, index) => (
                        <li key={index}>
                            {book.title} by {book.author}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}   

export default Bookshelf;