export const ImageGalleryItem = ({item,onClickF}) => {
    const {webformatURL,largeImageURL} = item;
    return (
    <li className="ImageGalleryItem" onClick={()=>onClickF(largeImageURL)}>
        <img src={webformatURL} alt="" />
        <br/>
    </li>
)}