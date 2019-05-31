import React, { Component } from 'react';
import { Link } from 'react-router-dom'
export default class Navbar extends Component {

    logout = () => {
        localStorage.clear()
        alert("Logged Out")
    }

    render () {
        return (
            <nav className="main-nav-bar">
                <Link to='/' className="nav-link">Home </Link>
                <Link to='/login' className="nav-link" >Login </Link>
                <Link to='/signup' className="nav-link" >Register </Link>
                <Link to='/shows' className="nav-link" >Shows & Movies </Link>
                <Link to='/addShow' className="nav-link">Add Show/Movie</Link>
                {localStorage.getItem('token') ? <a className="nav-link" onClick={this.logout} href="#">Logout</a> : null}
            </nav>
        )
    }
}