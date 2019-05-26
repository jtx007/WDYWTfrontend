import React, { Component } from 'react';
import adapters from '../adapters'



export default class UserSignupForm extends Component {

    state = {
        username: '',
        password: '',
        avatar: null,
        avatarURL: null
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
        const formData = new FormData();
        formData.append('user[username]', this.state.username)
        formData.append('user[password]', this.state.password)
        formData.append('user[avatar]', this.state.avatar)
        adapters.createUser(formData)
    }

    handleFile = (e) => {
        const file = e.target.files[0]
        const fileReader = new FileReader()
        fileReader.onloadend = () => {

        this.setState({
            avatar: file,
            photoURL: fileReader.result
        })
    }
        if (file) {
            fileReader.readAsDataURL(file)

        }
    }


    render() {
        const preview = this.state.photoURL ? <img className="preview-img" alt="preview-img" src={this.state.photoURL}/> : null
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
                        
                        {preview}
                        <button type="submit">Submit</button>
                    </form>
                </div>
            
        
            
        
        )
    }
}