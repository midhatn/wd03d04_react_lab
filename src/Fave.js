import React, { Component } from 'react'

export default class Fave extends Component {

      handleClick = (e) => {
        console.log("handling Fave click!")
    }
    render() {
     
        return (
            <div  className="film-row-fave add_to_queue">
                <p onClick={this.handleClick} className="material-icons">add_to_queue</p>
            </div>
        )
    }
}
