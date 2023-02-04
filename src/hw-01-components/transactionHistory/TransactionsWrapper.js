import Section from 'generalComponents/Section'
import React from 'react'
import TransactionHistory from './TransactionHistory'
import transactions from './transactions.json'

export default function TransactionsWrapper() {
  return (
    <Section type='task' title='Transaction History'>
    <TransactionHistory items={transactions}/>
    </Section>
  )
}
