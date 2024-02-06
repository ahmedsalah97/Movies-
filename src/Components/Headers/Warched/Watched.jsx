import React from 'react';
import { useMoviesContext } from '../../Context/GlobalContext';
import MovieCart from '../../MovieCart/MovieCart';
import "./Watched.css";


export default function Watched() {
  const MovieContext = useMoviesContext();
  return <>
  <div className="watched">
    <div className="container">
    <div className="heading">
        <h1 className=''>My Watched</h1>
        <span className='movies-count'>
        {MovieContext.watched.length}
          {MovieContext.watched.length === 1 ?  "Movie"  : "Movies" }
        </span>
      </div>
      {MovieContext.watched.length > 0 ? (<div className='movie-grid'>
        {MovieContext.watched.map((movie)=> (
          <MovieCart key={movie.imdbID} movie={movie} type="watched"/>

        ))}
      </div>) : <h2 className='no-movies fw-bolder'>No Movies in your list , add some!</h2>}
    </div>
  </div>
  
  </>
   
}
