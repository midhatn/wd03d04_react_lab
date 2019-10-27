import React, { Component } from 'react'
import Fave from "./Fave"

export default class FilmRow extends Component {
    render() {
        let date = new Date(this.props.newdate)
        return (
            <div className="film-row">
               <img src={`https://image.tmdb.org/t/p/w780${this.props.img}`} alt="" />
                <div className="film-summary">
                    <Fave />
                    <h1>{this.props.title}</h1>
                    <p>{date.getFullYear()}</p>
                </div>
            </div>
        )
    }
}
