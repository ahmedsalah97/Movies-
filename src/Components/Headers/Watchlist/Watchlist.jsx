import React from 'react';
import { useMoviesContext } from '../../Context/GlobalContext';
import MovieCart from '../../MovieCart/MovieCart';
import "./Watchlist.css" ;


export default function Watchlist() {
  const MovieContext = useMoviesContext();
  return <>
  <div className="watch-list">
    <div className="container">
      <div className="heading">
        <h1>My Watchlist</h1>
        <span   className='movies-count'>
          {MovieContext.watchlist.length}
          {MovieContext.watchlist.length === 1 ?  "Movie"  : "Movies" }
        </span>
      </div>

      {MovieContext.watchlist.length > 0 ? (<div className='movie-grid'>
      {MovieContext.watchlist.map((movie)=> (
      <MovieCart key={movie.imdbID} movie={movie} type="watchlist"/>))}
      
      </div>) : <h2 className='no-movies'>No Movies in your list , add some!</h2>}
    </div>
  </div>
  
  
  </>
   
}
