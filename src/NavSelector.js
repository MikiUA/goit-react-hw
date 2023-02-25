import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import {appRoutes, baseURL} from 'appRoutes'
import HoverLabel from 'generalComponents/HoverLabel';



export default function NavSelector() {
  const [selectedItem,setSelectedItem]=useState(window.location.pathname);
  const [hoveredItem,setHoveredItem] = useState('');

  return (
    <div className='selector-wrapper'>
      {appRoutes.map(({path,label,shortDescription,description})=>{
        if (!label) return false;
        return (
        <NavLink 
          key={path} 
          className={(selectedItem===baseURL+path)?'selector-item active':'selector-item'}
          // className='selector-item'
          onClick={()=>(setSelectedItem(baseURL+path))}
          to={path}
          onMouseEnter={()=>setHoveredItem(baseURL+path)}
          onMouseLeave={()=>setHoveredItem('')}
          >
            {(hoveredItem===baseURL+path)?<HoverLabel label={description}/>:''}
            <p className='selector-item-label'>{label}</p>
            <p className='selector-item-underlabel'>{shortDescription}</p>
        </NavLink>
      )})}
    </div>
  )
}

