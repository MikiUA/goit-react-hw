import React from 'react'
import { Outlet, useParams } from 'react-router-dom'

export default function MovieDetails() {
    const {movieID}=useParams();
    console.log(movieID);
  return (
    <div>
        <h3> Movie Details ({movieID})</h3>
        <Outlet/>
    </div>
  )
}
