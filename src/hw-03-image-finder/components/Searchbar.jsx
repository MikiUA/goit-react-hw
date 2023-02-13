import styles from './styles/Searchbar.module.css'
export const Searchbar = ({submitFunc}) => (
    <header className={styles["Searchbar"]}>
    <form onSubmit={e=>{
        e.preventDefault();
        submitFunc(e.target.elements.t3Filter.value)
        }}
        className={styles["SearchForm"]}>
      <button type="submit" className={styles["SearchForm-button"]}>
        <span className={styles["SearchForm-button-label"]}>Search</span>
      </button>
  
      <input
        className={styles["SearchForm-input"]}
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