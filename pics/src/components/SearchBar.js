function SearchBar({onSubmit}) {
    const handleForSubmit = (event) => {
        event.preventDefault();

        onSubmit('cars');
    };

    return (
        <div>
            <form onSubmit={handleForSubmit}>
                <input/>
            </form>
        </div>
    );
}

export default SearchBar;