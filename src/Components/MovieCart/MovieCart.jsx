import React from 'react';
import "./MovieCart.css";
import MovieControls from '../MovieControls/MovieControls';

export default function MovieCart({movie ,type}) {

  return <>
  <div className="movie-cart">
    <div className="overlay">
        {movie.Poster ? <img src={movie.Poster} alt={movie.Title}/> 
        : <div className='filter-poster'></div> }
    </div>
    {<MovieControls movie={movie} type={type}/>}
  </div>

  
  
  </>
  
}
