import React, { useState, useEffect } from 'react'
import { getMovieDetails, getMovieReviews,getMovieCredits, getSearchMovies, getTrending } from './fetch';

export default function Home() {
    const [trending,setTrending]=useState([]);

    // useEffect(() => {
    //   getTrending().then(response=>setTrending(response));
    // }, [])
    

    
    return (
        <div>Home
                <button onClick={()=>getTrending()}>get trending</button>
    <button onClick={()=>getSearchMovies('batman')}>get 'batman'</button>
    <button onClick={()=>getSearchMovies('fast',3)}>get 'fast page 3'</button>
    <button onClick={()=>getMovieDetails(703451)}>get 'Your place or mine'</button>
    <button onClick={()=>getMovieCredits(703451)}>get 'Your place or mine Credits.cast'</button>
    <button onClick={()=>getMovieReviews(703451)}>get 'Your place or mine Reviews'</button>
        </div>
    )
}
