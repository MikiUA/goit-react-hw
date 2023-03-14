import React, { useEffect, useState, Suspense } from 'react'
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom'
import { getMovieDetails } from './fetch_functions';
import Notification from 'generalComponents/Notification';
import GalleryCard from './components/GalleryCard';

import styles from './styles/MovieDetails.module.css'

export default function MovieDetails() {
    const {movieID}=useParams();
    const navigate = useNavigate();
    const [movieDetails,setMovieDetails]=useState({});
    const [error,setError]=useState(null)
    const {poster_path,original_title,vote_average,release_date,overview,genres=[]}=movieDetails;
    const movieTitle=original_title+(release_date?` (${release_date.split('-')[0]})`:'');

    useEffect(()=>{
      getMovieDetails(movieID).then(
        response=> setMovieDetails(response)
      ).catch(err=>setError(err))
    },[movieID])
    
  if (error) {
    console.log(error);
    return <Notification message="something went wrong, please try again"/>
  }
  return (
    <div>
      <button onClick={()=>navigate(-1)}>Go back</button>
        <div className={styles['details-section']}>
          <div className={styles['image-container']}>
            <GalleryCard image={poster_path?('https://image.tmdb.org/t/p/original'+poster_path):''} label=''/>
          </div>
          <div className={styles['description-container']}>
          <h6 className={styles['title']}>{movieTitle}</h6>
          <div className={styles['description-segment']}>
              <h6 className={styles['title']}>overview</h6>
              <p className={styles['description']}>{overview}</p>
            </div>

            <div className={styles['description-segment']}>
              <h6 className={styles['title']}>Genres</h6>
              <p className={styles['description']}>
                {genres.map((genre)=>
                  <span key={genre.id}
                    className={styles['genre-division']}>
                      {genre.name}</span>)}
              </p>
            </div>

            <div className={styles['description-segment']}>
              <h6 className={styles['title']}>User score:</h6>
              <p className={styles['description']}>{Math.round(vote_average*10)}%</p>
            </div>

            <div className={styles['description-segment']}>
              <h6 className={styles['title']}>Additional information</h6>
              <p className={styles['description']}>
                <span className={styles['genre-division']}> <Link to='./reviews' replace>Reviews</Link> </span>
                <span className={styles['genre-division']}><Link to='./cast' replace>Cast</Link></span>
              </p>
            </div>
          </div>
        </div>
	<Suspense fallback={<></>}>
        	<Outlet/>
	</Suspense>
    </div>
  )
}
