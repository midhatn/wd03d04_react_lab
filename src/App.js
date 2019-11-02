import React from 'react';
import logo from './logo.svg';
import './App.css';
import FilmListing from "./FilmListing"
import FilmDetails from "./FilmDetails"
import TMDB from "./TMDB"
import FilmRow from "./FilmRow"
import Fave from "./Fave"


function App() {
  return (
    <div className="film-library">
      <FilmListing films={TMDB.films} />
      <FilmDetails films={TMDB.films} />
    </div>
  );
}

export default App;
