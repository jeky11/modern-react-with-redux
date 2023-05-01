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

    return (
        <div className="app">
            <BookList books={books}/>
            <BookCreate onCreate={createBook}/>
        </div>
    );
}

export default App;