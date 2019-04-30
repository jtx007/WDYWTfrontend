import React, { Component } from 'react';
import  adapters from '../adapters'
export default class Show extends Component {

    state = {
        shows: []
    }

    componentDidMount() {
        adapters.getShows()
        .then(r => r.json())
        .then(data => console.log(data))
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}