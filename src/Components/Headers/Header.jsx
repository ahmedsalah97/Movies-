import React from 'react'
import { Link, NavLink } from 'react-router-dom'





export default function Header() {
  return <>
  <div className="header">
       <div className="container d-flex justify-content-between align-items-center">
        
        <div className="Logo">
            <Link to={'/'}>Movies</Link>
        </div>
        <ul className='nav-links mx-2'>
            <li>
                <NavLink to={"/"} >Watch List</NavLink>
            </li>
            <li>
                <NavLink to={"Watched"} >Watched</NavLink>
            </li>
            <li  >
               <Link to={"Add"} className='btn'>Add</Link>
            </li>
            
        </ul>
            
        </div>
    
       </div>

    
  
  
  
  </>
   
}

