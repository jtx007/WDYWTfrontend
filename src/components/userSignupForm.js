import React, { Component } from 'react';
import adapters from '../adapters'
import ActiveStorageProvider from 'react-activestorage-provider'


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
        console.log(this.state.file)
        adapters.createUser(this.state)
    }


    render() {

        return (
            <ActiveStorageProvider
                endpoint={{
                path: '/api/v1/users',
                model: 'User',
                attribute: 'avatar',
                method: 'POST',
                }}
            onSubmit={user => this.setState({ avatar: user.avatar })}
            render={({ handleUpload, uploads, ready}) =>  (
                <div className="form-container">
                    <form onSubmit={this.submitForm} className="form">
                        <h1>Register</h1>
                        <p>Enter Username: <input name="username" onChange={this.usernameInputChange} value={this.state.username} /></p>
                        <p>Enter Password: <input type="password" onChange={this.passwordInputChange} value={this.state.password} /></p>
                        <p>Upload avatar below</p>
                        <input type="file" disabled={!ready} 
                        onChange={e => handleUpload(e.currentTarget.files)} 
                        />
                        {uploads.map(upload => {
                            switch (upload.state) {
                                case 'waiting':
                                    return <p key={upload.id}>Waiting to upload {upload.file.name}</p>
                                case 'uploading':
                                    return (
                                        <p key={upload.id}>
                                        Uploading {upload.file.name}: {upload.progress}%
                                        </p>
                                    )
                                case 'error':
                                    return (
                                        <p key={upload.id}>
                                        Error uploading {upload.file.name}: {upload.error}
                                        </p>
                                    )
                                case 'finished':
                                    return (
                                        <p key={upload.id}>Finished uploading {upload.file.name}</p>
                                    )
                            }
                        })}
                        <button type="submit">Submit</button>
                    </form>
                </div>
            )}
            />
            
        )
    }
}