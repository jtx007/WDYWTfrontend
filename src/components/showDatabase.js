import React, { Component } from 'react';
import  adapters from '../adapters'
export default class Show extends Component {

    state = {
        shows: []
    }

    getShowImgURLS = (shows) => {
        return shows.map(show => {
            return `http://localhost:3000${show.cover_url}`
        })
    }

    showCoverImgs = (showURLS) => {
        return showURLS.map(showURL => {
            return <img className="show-cover" alt="show" src={showURL} />
        })
    }

    componentDidMount() {
        adapters.getShows()
        .then(r => r.json())
        .then(data => this.setState({
            shows: this.getShowImgURLS(data)
        }))
    }

    render() {
        console.log(this.state.shows)
        return (
            <div className="show-movies-page">
                <h1>Shows & Movies</h1>
                <div className="shows-movies-container">
                    {this.showCoverImgs(this.state.shows)}
                </div>
            </div>
        )
    }
}