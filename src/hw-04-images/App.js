// import Notification from 'generalComponents/Notification'
import Section from 'generalComponents/Section'
import React, {useEffect, useState } from 'react'
import { LoadButton } from './components/Button'
import ImageGallery from './components/ImageGallery'
import { Searchbar } from './components/Searchbar'
import {PixabayTitle} from './components/PixabayTitle'
import Notification from 'generalComponents/Notification'

export default function App() {
  const [imageList,setImageList]=useState([]);   
    function updateImageList(newItems=[]){setImageList((prevState)=>[...prevState,...newItems]);}
  const [filter,setFilter]=useState('');
  const [pageNum,setPageNum]=useState(1);
  const [isLoading,setIsLoading]=useState('loading');//loading//updating//false
  const [isMoreAvailible,setIsMoreAvailible]=useState(false);//true/false
  const [error,setError]=useState(null);

  function newFilter(newFilter=''){
    setFilter(newFilter);
    setIsLoading('loading');
    setPageNum(1);
    setError(null);
    setIsMoreAvailible(false);

    sendRequest(newFilter).then(response=>{
      setImageList(response.hits);
      setIsMoreAvailible(response.totalHits>12);
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
      updateImageList(response.hits);
      setIsMoreAvailible(response.totalHits>12*newPageNum);
    }).catch(err=>
      setError(err)
    ).finally(
      setIsLoading(false)
    );
  }
  useEffect(()=>{newFilter()},[])
  
  if (error) return <Notification label='Sorry, an error has occured' message={error.message}/>
  return (
    <Section type='task' title={<PixabayTitle/>}>
      <Searchbar submitFunc={newFilter}/>
      <ImageGallery items={imageList} isLoading={isLoading}/>
      {isMoreAvailible?
        <LoadButton LoadMoreFunc={loadMore} />
      :''}
    </Section>
  )
  
}


async function sendRequest(filter='',page=1){
  console.log('making request...');
  filter = filter.replaceAll(' ','%20');

  const ReqUrl = `https://pixabay.com/api/?image_type=photo&key=33557563-eb5e97db1c6663d33c38bf2d1&orientation=horizontal&per_page=12&page=` +page+'&q='+filter;

  return new Promise((resolve,reject)=>{
    fetch(ReqUrl,[])
    .then(
      (response)=>{
        if (!response.ok) throw response;
        response.json().then(jsonRes=>resolve(jsonRes));
        }
    ).catch((err)=>{
      reject(err);
    })
  })
}