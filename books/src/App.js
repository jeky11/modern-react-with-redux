import {useState} from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
    const [books, setBooks] = useState([]);

    const createBook = (title) => {
        const id = Math.round(Math.random() * 9999);
        const updatedBooks = [...books, {id: id, title: title}];
        setBooks(updatedBooks);
    }

    const editBookById = (id, newTitle) => {
        const updatedBooks = books.map((book) => {
            if (book.id === id) {
                return {...book, title: newTitle};
            }

            return book;
        });

        setBooks(updatedBooks);
    }

    const deleteBookById = (id) => {
        const updatedBooks = books.filter((book) => {
            return book.id !== id;
        });

        setBooks(updatedBooks);
    }

    return (
        <div className="app">
            <BookList books={books} onEdit={editBookById} onDelete={deleteBookById}/>
            <BookCreate onCreate={createBook}/>
        </div>
    );
}

export default App;