import './index.css'
import Fave from './Fave'
import React from 'react'

 const FilmRow=(props)=>  {
  
    
    let posterImg = props.film.poster_path
    
    return(
      <div className="film-row" onClick={() => props.onDetailsClick()}>
        <img src={`https://image.tmdb.org/t/p/w780${posterImg}`} alt="" />
   <div className="film-summary">
   <Fave onFaveToggle={props.onFaveToggle} isFave={props.isFave}  />
     <h1>{props.film.title}</h1>
     <p>{new Date(props.film.release_date).getFullYear()}</p>
   </div> 

 </div>
    )
  
}

export default FilmRow