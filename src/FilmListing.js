import React, { Component } from 'react'
import FilmRow from "./FilmRow"



export default class FilmListing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: "all"
        }
    }
    handleFilterClick = (filter) => {

        console.log("Setting filter to " + filter)
        this.setState({
            filter: filter
        })
    }


    render() {

        let allFilms = this.props.films.map((film, index) =>
            (<FilmRow key={index} img={film.poster_path} title={film.title} newdate={film.release_date} />))

        return (
            <div className="film-list">
                <h1 className="section-title">FILMS</h1>
                <div className="film-list-filters">
                <div className={`film-list-filter ${this.state.filter === 'all' ? 'is-active' : ''}`} onClick={() => this.handleFilterClick('all')}>
                        ALL
            <span className="section-count">{this.props.films.length}</span>
                    </div>
                    <div className={`film-list-filter ${this.state.filter === 'faves' ? 'is-active' : ''}`} onClick={() => this.handleFilterClick('faves')}>
                        FAVES
            <span className="section-count">0</span>
                    </div>
                </div>

                {allFilms}
            </div>
        )
    }
}
