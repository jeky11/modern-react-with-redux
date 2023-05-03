import {useState} from "react";
import useBooksContext from "../hooks/use-books-context";

function BookCreate() {
    const [title, setTile] = useState('');
    const {createBook} = useBooksContext();

    const handleChange = (event) => {
        setTile(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        createBook(title);
        setTile('');
    };

    return (
        <div className="book-create">
            <h3>Add a book</h3>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input value={title} onChange={handleChange} className="input"/>
                <button className="button">Create!</button>
            </form>
        </div>
    );
}

export default BookCreate;