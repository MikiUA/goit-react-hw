import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {appRoutes} from 'appRoutes'



export default function NavSelector() {
  const [selectedItem,setSelectedItem]=useState(window.location.pathname)
  return (
    <div className='selector-wrapper'>
      {appRoutes.map(({path,label,description})=>(
        label?
        <Link 
          key={path} 
          className={(selectedItem===path)?'selector-item selected':'selector-item'}
          onClick={()=>(setSelectedItem(path))}
          to={path}>
            {label}
        </Link>
        // </div>
        :''
      ))}
    </div>
  )
}

