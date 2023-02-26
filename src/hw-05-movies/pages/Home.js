import Section from 'generalComponents/Section';
import React, { useState, useEffect, useRef } from 'react'
// import { getMovieDetails, getMovieReviews,getMovieCredits, getSearchMovies } from './fetch_functions';
import { getTrending } from './fetch_functions';
import Notification from 'generalComponents/Notification';
import MovieGallery from './components/MovieGallery';

export default function Home() {
    const [trending,setTrending]=useState([]);
    const [error,setError]=useState(null);
    const isLoading=useRef(true);

    useEffect(() => {
        getTrending().then(response=>
            setTrending(response.results)
        ).catch(error=>setError(error)
        ).finally(isLoading.current=false);
    }, [])
    

    if (error) return <Notification message="something went wrong, please try again"/>;
    return (
        <Section>
            {/* <TESTBTNS/> */}
            <MovieGallery items={trending} isLoading={isLoading}/>
        </Section>
    )
}

// function TESTBTNS(){
//     return(
//         <Section label='test buttons'>
//             <button onClick={()=>getTrending()}>get trending</button>
//             <button onClick={()=>getSearchMovies('batman')}>get 'batman'</button>
//             <button onClick={()=>getSearchMovies('fast',3)}>get 'fast page 3'</button>
//             <button onClick={()=>getMovieDetails(703451)}>get 'Your place or mine'</button>
//             <button onClick={()=>getMovieCredits(703451)}>get 'Your place or mine Credits.cast'</button>
//             <button onClick={()=>getMovieReviews(703451)}>get 'Your place or mine Reviews'</button>
//         </Section>
//     )
// }
