import React, { Component } from 'react';

export default class UserSignupForm extends Component {

    state = {
        username: '',
        password: '',
        
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


    render() {
        console.log(this.state)
        return (
            <div className="form-container">
                <form className="register-form">
                    <h1>Register</h1>
                    <p>Enter Username: <input name="username" onChange={this.usernameInputChange} value={this.state.username} /></p>
                    <p>Enter Password: <input type="password" onChange={this.passwordInputChange} value={this.state.password} /></p>
                    <p>Upload avatar below</p>
                    <input  accept="image/*" onChange={this.uploadImg} value={this.state.image} type="file" />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}