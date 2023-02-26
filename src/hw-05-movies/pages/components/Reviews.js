import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { getMovieReviews } from '../fetch_functions';

import Section from 'generalComponents/Section';
import Notification from 'generalComponents/Notification';

export default function Reviews() {
  const {movieID}=useParams();
  const [movieReviews,setMovieReviews]=useState([]);
  const [error,setError]=useState(null)

  useEffect(()=>{
    getMovieReviews(movieID).then(
      response=> setMovieReviews(response.results)
    ).catch(err=>setError(err))
  },[movieID])
  
if (error) {
  console.log(error);
  return <Notification message="something went wrong, please try again"/>
}
  return (
    <Section title='Reviews'>
      {movieReviews.map(({id,author,content})=>(
        <Section key={id}>
        <h6>{author}:</h6>
        <p>{content}</p>
        </Section>
      ))
      }
    </Section>
  )
}
