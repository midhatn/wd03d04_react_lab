import React, { Component } from 'react';
import './App.css';
import FilmDetails from './FilmDetails.js';
import FilmListing from './FilmListing.js';
import TMDB from './TMDB.js';

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
console.log(this.state.current)
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
          <FilmListing films={this.state.films} faves={this.state.faves} onFaveToggle={this.handleFaveToggle} />
          <FilmDetails film={this.state.current} />
        </div>
      </div>
    );
  }
}

