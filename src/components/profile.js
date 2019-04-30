import React, { Component } from 'react';
import adapters from '../adapters'


export default class Profile extends Component {

    componentDidMount() {
        adapters.getFirstUser()
        .then(data => console.log(data))
    }

    render () {
        return (
            <div>
                <h1>User profile</h1>
            </div>
        )
    }
}