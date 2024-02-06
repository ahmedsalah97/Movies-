import React from 'react';
import { useMoviesContext } from '../Context/GlobalContext';
import * as actions from "../Context/ActionsType"



export default function MovieControls({movie , type }) {
    const MovieContext = useMoviesContext()
  return <>
  <div className="inner-cart-controls ">
    {
        type === "watchlist" && (
            <>
               <button onClick={()=>MovieContext.moviesDispatch({
                type: actions.ADD_MOVIE_TO_WATCHED ,
                payload: movie
               }) } className='ctrl-btn '>
                <i className='fa-solid fa-eye'></i>
            </button>
            <button onClick={()=>MovieContext.moviesDispatch({
                type:actions.REMOVE_MOVIE_FROM_WATCHLIST,
                payload: movie.imdbID
            }
            )} className='ctrl-btn'>
              <i class="fa-solid fa-xmark"></i>         
         </button>
           
            </>
        )
    }
    {
        type === "watched" && (
            <>
              <button  onClick={() => 
              MovieContext.moviesDispatch({
                type: actions.MOVE_TO_WATCHLIST ,
                payload: movie.imdbID,
              })
              }  className='ctrl-btn'>
                <i className='fa-solid fa-eye-slash'></i>
            </button>




            <button 
            onClick={()=>
              MovieContext.moviesDispatch({
                type: actions.REMOVE_FROM_WATCHED ,
                payload: movie.imdbID,
              })
            
            }
            className='ctrl-btn'>
              <i class="fa-solid fa-xmark"></i>         
         </button>
           
         
            </>
        )
    }
    
  </div>
  
  </>
    
}
