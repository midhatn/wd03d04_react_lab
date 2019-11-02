import React, { Component } from 'react'
import Fave from "./Fave"

export default class FilmRow extends Component {
    handleDetailsClick = (film) => {
        console.log("Fetching details for "+film)
    }
    render() {
        let date = new Date(this.props.newdate)
        let movie = this.props.title
        return (
            <div onClick={() => this.handleDetailsClick(movie)} className="film-row">
                <img src={`https://image.tmdb.org/t/p/w780${this.props.img}`} alt="" />
                <div className="film-summary">
                    <Fave />
                    <h1>{movie}</h1>
                    <p>{date.getFullYear()}</p>
                </div>
            </div>
        )
    }
}
