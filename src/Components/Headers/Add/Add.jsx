import React, { useState ,useEffect} from 'react';
import "./Add.css"
import axios from 'axios';
import ResultCard from '../../ResultCard/ResultCard';


export default function Add() {
  const [searchValue , setSearchValue] = useState("");
  const [movies , setMovies] = useState([]);
  useEffect(()=>{
    axios.get(`https://www.omdbapi.com/?s=${searchValue}&apikey=148f7e34`).then((response)=> {
      if(response.data.Search)
      {
        setMovies(response.data.Search);
      }
    }).catch((error)=>{
      // console.log(error);

    })
    if(searchValue =="")
    {
      setMovies([])
  
    }
  },[searchValue])

  return (
    <div className='add-pages'>
        <div className="container">
            <div className="add-content">
                <div className="input-container">
                    <input 
                    type="text" 
                    placeholder='Search For A Movie ....' 
                    value={searchValue} 
                    onChange={(e)=> setSearchValue(e.target.value)}
                    />
                </div>
                {movies.length > 0 && <ul className='results'>
                  {movies.map((movie)=>
                   (<li key={movie.imdbID}>
                    {<ResultCard movie={movie}/>}
                  </li>))}
                  </ul>}
            </div>
        </div>
    </div>
  )
}
