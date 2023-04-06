import {useState} from "react";

function BookCreate({onCreate}) {
    const [title, setTile] = useState('');

    const handleChange = (event) => {
        setTile(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onCreate(title);
        setTile('');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input value={title} onChange={handleChange}/>
                <button>Create!</button>
            </form>
        </div>
    );
}

export default BookCreate;