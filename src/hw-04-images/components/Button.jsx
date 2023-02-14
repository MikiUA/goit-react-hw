import styles from "./styles/Button.module.css"
export const LoadButton = ({LoadMoreFunc}) => {
    return (
    <button 
        className={styles.Button}
        onClick={()=>LoadMoreFunc()}
    >
        Load more
    </button>
)}