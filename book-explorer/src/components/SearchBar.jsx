function SearchBar({ onSearch }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.search.value.trim();
    if (value) {
      onSearch(value);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="search"
        placeholder="Buscar libros..."
      />
      <button type="submit">Buscar</button>
    </form>
  );
}

export default SearchBar;
