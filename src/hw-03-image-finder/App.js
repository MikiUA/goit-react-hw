// import Notification from 'generalComponents/Notification'
import Section from 'generalComponents/Section'
import React, { useEffect, useState } from 'react'
import { LoadButton } from './components/Button'
import ImageGallery from './components/ImageGallery'
import { Searchbar } from './components/Searchbar'
import './styles/styles.css'

export default function App() {
  const [imageList,setImageList]=useState([]);   
    function updateImageList(newItems=[]){setImageList((prevState)=>[...prevState,...newItems]);}

  const [filter,setFilter]=useState('');
  const [pageNum,setPageNum]=useState(1);
  
  const [isLoading,setIsLoading]=useState('loading');//loading//updating//false
  // const [error,setError]=useState(null);

  // useEffect(()=> {} ,[])
  // if (error) return <Notification message='error'/>

  //page load -> request with filter='' and page = 1;                           make req
  //new filter -> request with filter=state.filter and page=1;                  update filter & reset page; only then make req
  //new page -> request with filter=this.state.filter and page=this.state.page  update page; only then make req

  //either done by awaiting setState (which only availible with class components) or useEffect, that only triggers after state updates
  //the downside of last approach is multiple rerenderings of whole component (resetting pageNum and isLoading variables)

  useEffect(()=>{
    async function newFilter(){
      let newItems = await sendRequest(filter,1);
      setImageList(newItems.hits);
      setIsLoading(false);
    }
    setIsLoading('loading');
    setPageNum(1);
    newFilter();
    // eslint-disable-next-line
  },[filter])


  useEffect(()=>{
    async function newPage(){
      let newItems = await sendRequest(filter,pageNum);
      updateImageList(newItems.hits)
      setIsLoading(false);
    }
    if(pageNum>1) {
      setIsLoading('updating')
      newPage();
    }
  },[pageNum])



  return (
    <Section type='task' title={<a style={{height:'100%'}} href="https://pixabay.com/"><img style={{height:'100%'}} src="https://pixabay.com/static/img/public/leaderboard_b.png" alt="Pixabay"/></a>}>
      <Searchbar submitFunc={function (newFilter){setFilter(newFilter)}}/>
      <ImageGallery items={imageList} isLoading={isLoading}/>
      <LoadButton LoadMoreFunc={function (){setPageNum(pageNum+1)}} />
    </Section>
  )
}



async function sendRequest(filter,page){
  if (!filter) filter='';if (!page) page='';
  const THEurl = `https://pixabay.com/api/?image_type=photo&key=33557563-eb5e97db1c6663d33c38bf2d1&orientation=horizontal&per_page=12&page=` +page+'&q='+filter;
  // const THEurl = `https://pixabay.com/api/?image_type=photo&key=33557563-eb5e97db1c6663d33c38bf2d1&orientation=horizontal&per_page=12&page=${page}&q=${filter}`
  console.log(THEurl);
  return new Promise((resolve,reject)=>{
    fetch(THEurl,[])
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