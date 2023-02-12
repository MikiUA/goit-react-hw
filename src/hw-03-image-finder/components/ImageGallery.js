import Notification from 'generalComponents/Notification'
import {ImageGalleryItem} from './ImageGalleryItem'
import { Loader } from './Loader'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { Modal } from './Modal'

function ImageGallery({items=[],isLoading=true}) {
    const [modal,setModal]=useState('');
  if (isLoading==='loading') return <Loader/>
  if (items===[]) return <Notification message='Sorry, no images matched your search'/>

  return (
    <div>
        {modal?<Modal imgSrc={modal} onAbortF={()=>setModal('')}/>:''}
        <ul className="ImageGallery">
            {items.map((item)=>(
                <ImageGalleryItem key={item.id} item={item} onClickF={setModal}/>
            ))}
        </ul>
        {isLoading==='updating'?(
                <Loader/>
        ):''}
    </div>
  )
}

ImageGallery.propTypes = {
    items:PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.any.isRequired,
            webformatURL:PropTypes.string,
            largeImageURL:PropTypes.string
        })
    ),
    isLoading:PropTypes.oneOf(['loading','updating',false])
}

export default ImageGallery

