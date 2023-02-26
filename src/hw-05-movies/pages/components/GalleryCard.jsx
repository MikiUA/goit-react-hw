import styles from 'hw-03-image-finder/components/styles/ImageGalleryItem.module.css'

export default function GalleryCard({image='',label='',onClickF=function(){},alternative=''}) {
  return (
    <div className={styles["ImageGalleryItem"]} onClick={()=>onClickF()}>
        <img className={styles["ImageGalleryItem-image"]} src={image} alt={alternative} />
        <div>{label}</div>
    </div>
  )
}