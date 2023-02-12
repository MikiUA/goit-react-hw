export const Searchbar = ({submitFunc}) => (
    <header className="Searchbar">
    <form onSubmit={e=>{
        e.preventDefault();
        submitFunc(e.target.elements.t3Filter.value)
        }}
        className="SearchForm">
      <button type="submit" className="SearchForm-button">
        <span className="SearchForm-button-label">Search</span>
      </button>
  
      <input
        className="SearchForm-input"
         id='t3Filter'
        name="t3Filter"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
    </form>
  </header>
)