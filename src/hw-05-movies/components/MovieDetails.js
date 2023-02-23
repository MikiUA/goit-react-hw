import React from 'react'
import { Route, Routes, useParams } from 'react-router-dom'
import Cast from './Cast'
import Reviews from './Reviews'

export default function MovieDetails() {
    const {movieID}=useParams();
    console.log(movieID);
  return (
    <div>
        <h3> Movie Details ({movieID})</h3>
        <Routes>
            <Route index element={<></>}/>
            <Route path='/cast' element={<Cast/>}/>
            <Route path='/reviews' element={<Reviews/>}/>
        </Routes>
    </div>
  )
}
