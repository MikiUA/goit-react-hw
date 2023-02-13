import React, { Component } from 'react'
import Notification from 'generalComponents/Notification'
import {ImageGalleryItem} from './ImageGalleryItem'
import { Loader } from './Loader'
import PropTypes from 'prop-types'
import { Modal } from './Modal'


export default class ImageGallery extends Component {
  static propTypes = {
    items:PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.any.isRequired,
            webformatURL:PropTypes.string,
            largeImageURL:PropTypes.string
        })
    ),
    isLoading:PropTypes.oneOf(['loading','updating',false])
  }
  state={
    modal:''
  }
  render() {
    if (this.props.isLoading==='loading') return <Loader/>
    if (this.props.items.length===0) return <Notification message='Sorry, no images matched your search'/>
    return (
        <div>
        {this.state.modal?<Modal imgSrc={this.state.modal} onAbortF={()=>this.setState({modal:''})}/>:''}
        <ul className="ImageGallery">
            {this.props.items.map((item)=>(
                <ImageGalleryItem key={item.id} item={item} onClickF={(url)=>this.setState({modal:url})}/>
            ))}
        </ul>
        {this.props.isLoading==='updating'?(
                <Loader/>
        ):''}
    </div>
    )
  }
}

