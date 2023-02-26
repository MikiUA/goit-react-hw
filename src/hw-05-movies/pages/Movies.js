import React, { useState } from 'react'
import { getSearchMovies as sendRequest} from './fetch_functions';
import Section from 'generalComponents/Section';
import Notification from 'generalComponents/Notification';

import { Searchbar } from 'hw-03-image-finder/components/Searchbar';
import { LoadButton } from 'hw-03-image-finder/components/Button';
import MovieGallery from './components/MovieGallery';

//this is mostly unmodified (except responce fields and components) Gallery application from past tasks. 
//All the naming reflect image gallery, despite this component is being a movie gallery

export default function Movies() {
  const [imageList,setImageList]=useState([]);   
    function updateImageList(newItems=[]){setImageList((prevState)=>[...prevState,...newItems]);}
  const [filter,setFilter]=useState('');
  const [pageNum,setPageNum]=useState(1);
  const [isLoading,setIsLoading]=useState(false);//loading//updating//false
  const [isMoreAvailible,setIsMoreAvailible]=useState(false);//true/false
  const [error,setError]=useState(null);

  function newFilter(newFilter=''){
    setFilter(newFilter);
    if (!newFilter) return
    setIsLoading('loading');
    setPageNum(1);
    setError(null);
    setIsMoreAvailible(false);

    sendRequest(newFilter).then(response=>{
      setImageList(response.results);
      setIsMoreAvailible(response.total_pages>1);
    }).catch(err=>
      setError(err)
    ).finally(
      setIsLoading(false)
    );
  };
  function loadMore(){
    let newPageNum=pageNum+1;// this is to prevent request from executing before or after setState occurs
    setPageNum(newPageNum);
    setIsLoading('updating');
    setError(null);
    setIsMoreAvailible(false);

    sendRequest(filter,newPageNum).then(response=>{
      updateImageList(response.results);
      setIsMoreAvailible(response.total_pages>newPageNum);
    }).catch(err=>
      setError(err)
    ).finally(
      setIsLoading(false)
    );
  }
  
  if (error) {
    console.log(error)
    return <Notification message="something went wrong, please try again"/>
  }
  if (!filter) return(
    <Section>
      <Searchbar submitFunc={newFilter}/>
    </Section>
  )
  return (
    <Section>
      <Searchbar submitFunc={newFilter}/>
      <MovieGallery items={imageList} isLoading={isLoading}/>
      {isMoreAvailible?
        <LoadButton LoadMoreFunc={loadMore} />
      :''}
    </Section>
  )
}