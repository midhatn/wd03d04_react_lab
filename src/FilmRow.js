import './index.css'
import Fave from './Fave'
import React from 'react'

 const FilmRow=(props)=>  {
  
   
    return(
      <div className="film-row">
   <img src={`https://image.tmdb.org/t/p/w780${props.film.poster_path}`} alt="" />
   <div className="film-summary">
   <Fave onFaveToggle={props.onFaveToggle} isFave={props.isFave}  />
     <h1>{props.film.title}</h1>
    
     <p>{new Date(props.film.release_date).getFullYear()}</p>
   </div> 

 </div>
    )
  
}

export default FilmRow