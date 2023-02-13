import React from 'react'
import PropTypes from 'prop-types'
import Notification from './Notification'

function HomePage({anyfuckingprop}) {
    if (anyfuckingprop) console.log(anyfuckingprop);
  return (
    <div>
        <Notification label='This is a homework page' message="Select a task you want to see in the navigation menu"/>
        https://github.com/MikiUA/goit-react-hw
    </div>
  )
}

HomePage.propTypes = {
    anyfuckingprop:PropTypes.any
}

export default HomePage
