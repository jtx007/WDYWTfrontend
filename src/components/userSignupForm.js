import React, { Component } from 'react';
import adapters from '../adapters'



export default class UserSignupForm extends Component {

    state = {
        username: '',
        password: '',
        avatar: null
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
        const formData = new FormData();
        formData.append('user[username]', this.state.username)
        formData.append('user[password]', this.state.password)
        formData.append('user[avatar]', this.state.avatar)
        adapters.createUser(formData)
    }

    handleFile = (e) => {
        this.setState({
            avatar: e.target.files[0]
        })
    }


    render() {
        return (
                <div className="form-container">
                    <form onSubmit={this.submitForm} className="form">
                        <h1>Register</h1>
                        <p>Enter Username: <input name="username" onChange={this.usernameInputChange} value={this.state.username} /></p>
                        <p>Enter Password: <input type="password" onChange={this.passwordInputChange} value={this.state.password} /></p>
                        <p>Upload avatar below</p>
                        <input type="file"
                        onChange={this.handleFile}
                        />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            
        
            
        
        )
    }
}