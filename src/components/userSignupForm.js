import React, { Component } from 'react';
import adapters from '../adapters'

export default class UserSignupForm extends Component {

    state = {
        username: '',
        password: '',
        file: ''
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

    fileUpload = (e) => {
        this.setState({
            file: e.target.files[0]
        })

    }

    submitForm = (event) => {
        event.preventDefault()
        adapters.createUser(this.state)
    }


    render() {

        return (
            <div className="form-container">
                <form onSubmit={this.submitForm} className="register-form">
                    <h1>Register</h1>
                    <p>Enter Username: <input name="username" onChange={this.usernameInputChange} value={this.state.username} /></p>
                    <p>Enter Password: <input type="password" onChange={this.passwordInputChange} value={this.state.password} /></p>
                    <p>Upload avatar below</p>
                    <input onChange={this.fileUpload}  accept="image/*"  value={this.state.image} type="file" />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}