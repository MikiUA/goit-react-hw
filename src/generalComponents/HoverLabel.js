import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles/HoverLabel.module.css'

function HoverLabel({label}) {
    if (!label) return <></>
  return (
    <div className={styles.HoverLabelWrapper}>
        <div className={styles.HoverLabel}>{label}</div>
    </div>
  )
}

HoverLabel.propTypes = {
    label:PropTypes.string
}

export default HoverLabel
