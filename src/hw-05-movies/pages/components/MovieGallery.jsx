import React from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

import Section from 'generalComponents/Section'
import Notification from 'generalComponents/Notification'
import { Loader } from 'hw-03-image-finder/components/Loader'
import GalleryCard from './GalleryCard'

import styles from 'hw-03-image-finder/components/styles/ImageGallery.module.css'

function MovieGallery({items,isLoading}) {    
    const navigate=useNavigate();
    
    if (isLoading==='loading') return <Loader/>
    if (items.length===0) return <Notification message='Sorry, no movies matched your criteria'/>

    function onClickHandler(movieID){
        console.log(movieID);
        return navigate(`../movies/${movieID}`);
    }
    return (
    <Section>
        <ul className={styles['ImageGallery']}>
            {items.map(({id,original_title,poster_path})=>(
                <GalleryCard key={id} image={poster_path?('https://image.tmdb.org/t/p/original'+poster_path):''} label={original_title} onClickF={()=>onClickHandler(id)}/>
            ))}
        </ul>
        {isLoading==='updating'?(
                <Loader/>
        ):''}
    </Section>
    )
}

MovieGallery.propTypes = {
    items:PropTypes.arrayOf(
        PropTypes.shape({
            // id:PropTypes.any.isRequired,
            // webformatURL:PropTypes.string,
            // largeImageURL:PropTypes.string
        })
    ),
    isLoading:PropTypes.oneOf(['loading','updating',false])
}

export default MovieGallery

// import React, { Component } from 'react'
// import Notification from 'generalComponents/Notification'
// import {ImageGalleryItem} from './ImageGalleryItem'
// import { Loader } from './Loader'
// import PropTypes from 'prop-types'
// import { Modal } from './Modal'
// import styles from './styles/ImageGallery.module.css'


// export default class ImageGallery extends Component {
//  
//   state={
//     modal:''
//   }
//   render() {
//     if (this.props.isLoading==='loading') return <Loader/>
//     if (this.props.items.length===0) return <Notification message='Sorry, no images matched your search'/>
//     return (
//         <div>
//         {this.state.modal?<Modal imgSrc={this.state.modal} onAbortF={()=>this.setState({modal:''})}/>:''}
//         <ul className={styles['ImageGallery']}>
//             {this.props.items.map((item)=>(
//                 <ImageGalleryItem key={item.id} item={item} onClickF={(url)=>this.setState({modal:url})}/>
//             ))}
//         </ul>
//         {this.props.isLoading==='updating'?(
//                 <Loader/>
//         ):''}
//     </div>
//     )
//   }
// }

