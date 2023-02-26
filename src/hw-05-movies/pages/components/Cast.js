import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getMovieCredits } from '../fetch_functions';

import Section from 'generalComponents/Section';
import Notification from 'generalComponents/Notification';
import GalleryCard from './GalleryCard';

import styles from 'hw-03-image-finder/components/styles/ImageGallery.module.css'

export default function Cast() { 
  const {movieID}=useParams();
  const [movieCast,setMovieCast]=useState([]);
  const [error,setError]=useState(null)

  useEffect(()=>{
    getMovieCredits(movieID).then(
      response=> setMovieCast(response.cast)
    ).catch(err=>setError(err))
  },[movieID])
  
  function CastCard({item}){
    const {character,name,profile_path}=item;
    return (
    <>
    <GalleryCard 
      image={profile_path?('https://image.tmdb.org/t/p/original'+profile_path):''} 
      label={<span><i>{name}</i> as <b>{character}</b></span>}/>
    </>
  )}
if (error) {
  console.log(error);
  return <Notification message="something went wrong, please try again"/>
}
  return (
    <Section title='Cast'>
      <div className={styles['ImageGallery']}>
      {movieCast.map(item=><CastCard item={item}/>)}
      </div>
    </Section>
  )
}
