import Section from 'generalComponents/Section'
import React, { Component } from 'react'
import { LoadButton } from './components/Button'
import ImageGallery from './components/ImageGallery'
import { Searchbar } from './components/Searchbar'
import {PixabayTitle} from './components/PixabayTitle'
import Notification from 'generalComponents/Notification'

export default class App extends Component {
  state={
    imageList:[],
    filter:'',
    pageNum:1,
    isLoading:'loading',//loading//updating//false
    isMoreAvailible:false,
    error:null
  }  

  changeFilter = (newFilter) => {
    this.setState({filter:newFilter});
  }

  updateImageList=(newItems=[])=>{
    this.setState((prevState)=>({
      imageList:[...prevState,...newItems]
    }))
  }
  
  //page load -> request with filter='' and page = 1;                           make req
  //new filter -> request with filter=state.filter and page=1;                  update filter & reset page; only then make req
  //new page -> request with filter=this.state.filter and page=this.state.page  update page; only then make req

  componentDidMount(){
    sendRequest().then((response)=>{
      this.setState({
        imageList:response.hits,
        isMoreAvailible:true  //since this is didmount and no filter set yet we can assume that there are more than 12 pics total from api, otherwise it'll bring the error
      });
    }).catch((err)=>{
      this.setState({error:err.message});
    }).finally(
      this.setState({isLoading:false})
    )
  }

  componentDidUpdate(_prevProps,prevState){
    if (prevState.filter!==this.state.filter){
      this.setState({
        isLoading:'loading',
        pageNum:1,
        error:null
      })
      sendRequest(this.state.filter,1
        ).then(response=>{
        this.setState({
          imageList:response.hits,
          isMoreAvailible:(response.totalHits>12),
        })
      }).catch(err=>{
        this.setState({error:err});
      }).finally(
        this.setState({isLoading:false})
      )
    }

    if (prevState.pageNum!==this.state.pageNum && this.state.pageNum>1){
      this.setState({isLoading:'updating'});
      sendRequest(this.state.filter,this.state.pageNum
        ).then(response=>{
          this.setState(previsousState=>({
            imageList:[...previsousState.imageList,...response.hits],
            isMoreAvailible:(response.totalHits>12*this.state.pageNum)
          }))
      }).catch(err=>{
        this.setState({error:err});
      }).finally(
        this.setState({isLoading:false})
      )
    }
  }

  render() {
    if(this.state.error) return <Notification label='Sorry, an error has occured' message={this.state.error.message}/>
    return (
      <Section type='task' title={<PixabayTitle/>}>
        <Searchbar submitFunc={this.changeFilter}/>
        <ImageGallery items={this.state.imageList} isLoading={this.state.isLoading}/>
        {this.state.isMoreAvailible?
        <LoadButton LoadMoreFunc={()=>{this.setState({pageNum:this.state.pageNum+1})}} />
        :''}
      </Section>
    )
  }
}


async function sendRequest(filter='',page=1){
  console.log('making request...');
  filter = filter.replaceAll(' ','%20');

  const THEurl = `https://pixabay.com/api/?image_type=photo&key=33557563-eb5e97db1c6663d33c38bf2d1&orientation=horizontal&per_page=12&page=` +page+'&q='+filter;
  
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