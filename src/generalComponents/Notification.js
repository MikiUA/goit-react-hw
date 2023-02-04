import React from 'react'
import PropTypes from 'prop-types'
import { NotificationMsg, NotificationTitle, NotificationWrapper } from './styles/Notification.styled'

function Notification({label='',message=''}) {
  return (
    <NotificationWrapper>
        {label?
          <NotificationTitle>{label}</NotificationTitle>
          :''}
        <NotificationMsg>{message}</NotificationMsg> 
    </NotificationWrapper>
  )
}

Notification.propTypes = {
  label:PropTypes.string,
  message:PropTypes.string.isRequired
}

export default Notification

