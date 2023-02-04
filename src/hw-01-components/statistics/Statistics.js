import React from 'react'
import PropTypes from 'prop-types'
import styles from './Statistics.module.css'

let randomcolor = () => {return '#'+Math.floor(Math.random()*16777215).toString(16)}

function Statistics({title,stats}) {
    if (!checkstats(stats)) return console.warn("Sent stats do not average to 100%");
  return (
    <section className={styles.statistics}>
        {title?<h2 className={styles.title}>{title}</h2>:''}

        <ul className={styles['stat-list']}>
            {stats.map(({id,label,percentage})=>{
                return (
                    <li style={{backgroundColor:randomcolor()}} className={styles.item} key={id} >
                    <span className={styles.label}>{label} </span>
                    <span className={styles.percentage}>{percentage}%</span>
                    </li>
                )
            })}
        </ul>
    </section>
  )
}

function checkstats(stats){
   let _100percent= stats.reduce((accumulator,currentValue)=> accumulator+currentValue.percentage,0)
//    console.log(_100percent);
   return _100percent===100 ?1:0;
}
Statistics.propTypes = {
    title:PropTypes.string,
    stats:PropTypes.arrayOf(
        PropTypes.exact({
            id:PropTypes.any,
            label:PropTypes.string,
            percentage:PropTypes.number
        })
    ).isRequired
}

export default Statistics
