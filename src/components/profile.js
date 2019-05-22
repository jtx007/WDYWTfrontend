import React, { Component } from 'react';
import adapters from '../adapters'


export default class Profile extends Component {

    state = {
        avatar: null
    }
    
    componentDidMount() {
        adapters.getFirstUser()
        .then(data => this.setState({ avatar: `http://localhost:3000${data.avatar_url}` }))
    }

    render () {
        return (
            <div className="user-profile">
                <h1>Welcome Current User</h1>
                <img className="avatar-img" src ={this.state.avatar} alt="avatar-img" />
                <div className="user-show-list">
                    <h3>Your Media</h3>
                </div>
            </div>
        )
    }
}