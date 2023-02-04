import React from 'react'
import PropTypes from 'prop-types'
import FriendItem from './FriendItem'

function FriendList({friends}) {
  return (
    <ul className="friend-list">
    {friends.map((friend)=>{
        if (!friend.id) return console.warn("there is a friend item without id")
        return <FriendItem key={friend.id} item={friend} />
    })}
</ul>
  )
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar:PropTypes.string,
      name:PropTypes.string.isRequired,//?
      isOnline:PropTypes.bool,
      id:PropTypes.any.isRequired,
  }))
}

export default FriendList
