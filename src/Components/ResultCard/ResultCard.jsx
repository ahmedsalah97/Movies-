import React from 'react';
import "./ResultCard.css";
import { useMoviesContext } from './../Context/GlobalContext';
import * as actions from '../Context/ActionsType';



function ResultCard({movie}) {
  const MoviesContext = useMoviesContext();
  const storedMovie = MoviesContext.watchlist.find(
    (m)=> m.imdbID === movie.imdbID);
  const storedMovieWatched = MoviesContext.watched.find(
    (m)=> m.imdbID === movie.imdbID); 
    const watchListDisabled = storedMovie ? true : storedMovieWatched ? true : false ;
    const watchedDisabled = storedMovieWatched ? true :  false ;

  return (
    <div className='card-result  d-flex'>
      <div className="poster">
        {movie.Poster ? <img src={movie.Poster} alt={movie.Title}/> :
         <div className='filter'></div>}
      </div>
      <div className="info">
        <div className="heading">
            <h3 className='title'>{movie.Title}</h3>
            {movie.Year ? <h4 className='date'>{movie.Year}</h4> : "-"}
        </div>
        <div className="controls ">
          {/* button add watchlist */}
        <button
         onClick={()=> MoviesContext.moviesDispatch(
        {type :actions.ADD_MOVIE_TO_WATCHLIST ,
         payload : movie 
        }) } 
        disabled={watchListDisabled}
        className='btn'>
          Add to Watchlist
        </button>
         {/* button add watchlist */}
        <button 
           onClick={()=> MoviesContext.moviesDispatch(
            {type :actions.ADD_MOVIE_TO_WATCHED ,
             payload : movie 
            }) } 
       
        className='btn'
        disabled={watchedDisabled}
        >
          Add to Watched
        </button>
        </div>
      </div>
    </div>
  )
}

export default ResultCard ;
