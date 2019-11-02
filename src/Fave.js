import React, { Component } from 'react'
import './index.css'


export default class Fave extends Component {
   
    handleClick =(e)=> {
        e.stopPropagation()
        console.log('Handling Fave click!')
      
        this.props.onFaveToggle()
      

      }


    render() {
        const isFave = (this.props.isFave) ? 'remove_from_queue' : 'add_to_queue'

        return (
            <div onClick={this.handleClick} className={"film-row-fave " + isFave}>
                <p className="material-icons">{isFave}</p>
            </div>
        )
    }
}
