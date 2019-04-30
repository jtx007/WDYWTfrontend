import React, { Component } from 'react';
import { Link } from 'react-router-dom'
export default class Navbar extends Component {
    render () {
        return (
            <nav className="main-nav-bar">
                <Link to='/' className="nav-link">Home </Link>
                <Link to='/login' className="nav-link" >Login </Link>
                <Link to='/signup' className="nav-link" >Register </Link>
                <Link to='/shows' className="nav-link" >Shows & Movies </Link>
            </nav>
        )
    }
}