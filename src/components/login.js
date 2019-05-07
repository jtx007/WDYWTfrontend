import React, { Component } from 'react';

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
        console.log(this.state.file)
        // adapters.createUser(this.state)
    }


    render () {
        return (
            <div className="form-container">
                <form onSubmit={this.submitForm} className="login-form">
                    <h1>Login</h1>
                    <p>Enter Username: <input name="username" onChange={this.usernameInputChange} value={this.state.username} /></p>
                    <p>Enter Password: <input type="password" onChange={this.passwordInputChange} value={this.state.password} /></p>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}