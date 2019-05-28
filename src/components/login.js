import React, { Component } from 'react';
import adapters from '../adapters';

export default class Login extends Component {

    state = {
        username: '',
        password: ''
    }

    usernameInputChange = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    passwordInputChange = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    submitForm = (event) => {
        event.preventDefault()
        const formData = new FormData()
        formData.append('username', this.state.username)
        formData.append('password', this.state.password)
        adapters.loginUser(formData)
        .then(r => r.json())
        .then(data => localStorage.setItem('token', data.token))
    }


    render () {
        return (
            <div className="form-container">
                <form onSubmit={this.submitForm} className="login-form">
                    <h1>Login</h1>
                    <div>
                    <p>Enter Username: <input name="username" onChange={this.usernameInputChange} value={this.state.username} /></p>
                    <p>Enter Password: <input type="password" onChange={this.passwordInputChange} value={this.state.password} /></p>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}