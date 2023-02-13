import styles from './styles/ImageGalleryItem.module.css'

export const ImageGalleryItem = ({item,onClickF}) => {
    const {webformatURL,largeImageURL} = item;
    return (
    <li className={styles["ImageGalleryItem"]} onClick={()=>onClickF(largeImageURL)}>
        <img className={styles["ImageGalleryItem-image"]}
        src={webformatURL} alt="" />
        <br/>
    </li>
)}