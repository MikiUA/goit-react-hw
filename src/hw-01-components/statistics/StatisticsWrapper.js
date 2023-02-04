import Section from 'generalComponents/Section'
import React from 'react'
import data from './data.json'
import Statistics from './Statistics'

export default function StatisticsWrapper() {
  return (
    <Section type='task' title='Statistics'>
    <Statistics stats={data}/>
    <br/>
    <Statistics title="Upload Stats" stats={data}/>
    </Section>
  )
}
