import React, { Component } from 'react'
import FilmRow from "./FilmRow"



export default class FilmListing extends Component {
    handleFilterClick = (filter) => {
        console.log("Setting filter to "+filter)
    }
    render() {
        let allFilms = this.props.films.map( (film, index) => (<FilmRow img={film.poster_path} title={film.title} newdate={film.release_date}/>))
        return (
            <div className="film-list">
    <h1 className="section-title">FILMS</h1>
    <div className="film-list-filters">
        <div onClick={() => this.handleFilterClick('faves')} className="film-list-filter">
            ALL
            <span className="section-count">{this.props.films.length}</span>
        </div>
        <div onClick={() => this.handleFilterClick('faves')} className="film-list-filter">
            FAVES
            <span className="section-count">0</span>
        </div>
    </div>

    {allFilms}
</div>
        )
    }
}
