import Section from 'generalComponents/Section'
import React from 'react'
import FriendList from './FriendList'

import friends from './friends.json'

export default function FriendListWrapper() {
  return (
    <Section type='task' title='Friend List'>
        <FriendList friends={friends}/>
    </Section>
  )
}
