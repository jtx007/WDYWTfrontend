import React, { Component } from 'react';
import adapters from '../adapters'


export default class Profile extends Component {

    state = {
        username: '',
        avatar: null,
        shows: null
    }
    
    componentDidMount() {
        adapters.getFirstUser()
        .then(data => this.setState({ 
            username: data.username,
            avatar: `http://localhost:3000${data.avatar_url}`,
            shows: data.shows
        }))
    }

    render () {
        console.log(this.state.shows)
        return (
            <div className="user-profile">
                <h1>Welcome {this.state.username}</h1>
                <img className="avatar-img" src ={this.state.avatar} alt="avatar-img" />
                <div className="user-show-list">
                    <h3>Your Media</h3>
                </div>
            </div>
        )
    }
}