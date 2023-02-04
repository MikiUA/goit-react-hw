import React from 'react'
import PropTypes from 'prop-types'
import styles from './Transactions.module.css'

function TransactionHistory({items}) {
  return (
    <table className={styles['transaction-history']}>
        <thead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>

        <tbody>
            {items.map(({id,type,amount,currency})=>{
                return (
                <tr key={id}>
                    <td>{type}</td>
                    <td>{amount}</td>
                    <td>{currency}</td>
                </tr>
                )
            })}
        </tbody>
    </table>
  )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.any,
            type:PropTypes.string,
            amount:PropTypes.any,//theoretically number but json passes us strigs and we should check exact shape anyway
            currency:PropTypes.string
        })
    )
}

export default TransactionHistory
