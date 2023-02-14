import React from 'react'
import Notification from './Notification'
import Section from './Section';

export default function HomePage() {
  return (
    <Section type='task' title='This is a homework page'>
        <Notification message="Select a task you want to see in the navigation menu"/>
        <br/>
        <a href='https://github.com/MikiUA/goit-react-hw'>
        Source code
        </a>
        <div style={{marginTop:'1em', fontSize:'small'}}>https://github.com/MikiUA/goit-react-hw</div>
        
    </Section>
  )
}