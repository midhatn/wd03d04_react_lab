import React, { Component } from 'react';
import './App.css';
import FilmDetails from './FilmDetails.js';
import FilmListing from './FilmListing.js';
import TMDB from './TMDB.js';
import axios from "axios"

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      films: TMDB.films,
      faves: [],
      
      current: {}
  
    }
    this.handleFaveToggle = this.handleFaveToggle.bind(this)

  }


  handleDetailsClick=(film)=>{
    const url = `https://api.themoviedb.org/3/movie/${film.id}?api_key=${TMDB.api_key}&append_to_response=videos,images&language=en`
console.log("hiiii")
axios({
  method: 'GET',
  url: url
}).then(response => {
  console.log(response) // take a look at what you get back!
  console.log(`Fetching details for ${film.title}`);
  this.setState({ current: response.data })
})
  }

  
  handleFaveToggle=(film)=>{
    const faves =this.state.faves.slice(0)
    const filmIndex=faves.indexOf(film)

    if(filmIndex===-1){
      faves.push(film)
    }else{
      faves.splice(filmIndex,1)
      
    }
    this.setState({
      
      faves: faves
    })

    
  }

  render() {


    return (
      <div className="App" >
        <div className="film-library">
          <FilmListing films={this.state.films} faves={this.state.faves} onFaveToggle={this.handleFaveToggle} onDetailsClick={this.handleDetailsClick} />
          <FilmDetails film={this.state.current} />
        </div>
      </div>
    );
  }
}

