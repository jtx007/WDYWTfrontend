import React, { Component } from 'react';
import adapters from '../adapters'


export default class Profile extends Component {

    componentDidMount() {
        adapters.getFirstUser()
        .then(data => console.log(data))
    }

    render () {
        return (
            <div className="user-profile">
                <h1>Welcome Current User</h1>
                <div className="user-show-list">
                    <h3>Your Media</h3>
                </div>
            </div>
        )
    }
}