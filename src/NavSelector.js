import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {appRoutes, baseURL} from 'appRoutes'



export default function NavSelector() {
  const [selectedItem,setSelectedItem]=useState(window.location.pathname)
  return (
    <div className='selector-wrapper'>
      {appRoutes.map(({path,label})=>{
        if (!label) return false;
        return (
        <Link 
          key={path} 
          className={(selectedItem===baseURL+path)?'selector-item selected':'selector-item'}
          onClick={()=>(setSelectedItem(baseURL+path))}
          to={path}>
            {label}
        </Link>
      )})}
    </div>
  )
}

