import React from 'react'
import { Link } from 'react-router-dom'

export default function MovieNavPanel() {
  return (
    <div>
        <Link to='./'>Home</Link> <Link to='./movies'>movies</Link>
    </div>
  )
}
