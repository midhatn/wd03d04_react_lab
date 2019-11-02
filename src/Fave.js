import React, { Component } from 'react'

export default class Fave extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            isFave: false
        }
    }
  
    handleClick = (e) => {
        e.stopPropagation();
        console.log("handling Fave click!");
        this.setState({
            isFave: !this.state.isFave

        })
        console.log(this.state)

    }


    render() {
        const isFave = (this.state.isFave) ? 'remove_from_queue' : 'add_to_queue'

        return (
            <div onClick={this.handleClick} className="film-row-fave add_to_queue">
                <p className="material-icons">{isFave}</p>
            </div>
        )
    }
}
