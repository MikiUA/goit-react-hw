import React from 'react'
import PropTypes from 'prop-types'

function FriendItem({item:{avatar,name,isOnline}}) {
  return (
    <div style={{
      border:'1px solid black',
      margin:'5px',
      borderShadow:'1px solid gray',
      padding:'2px'
    }}>
      <span style={{
        color:(isOnline)?'green':'red',
        paddingLeft:'10px'
        }}>
          *
      </span>

      <img 
        style={{
          height:'50px',
          width:'50px',
          padding:'2px 10px'
        }}
        src={avatar}  alt="User avatar">
      </img>
        {name}
        
    </div>
  )
}

FriendItem.propTypes = {
  item:PropTypes.shape({
    id: PropTypes.any,
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool
  })
}

export default FriendItem
