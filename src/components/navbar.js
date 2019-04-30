import React, { Component } from 'react';

export default class Navbar extends Component {
    render () {
        return (
            <nav className="main-nav-bar">
                <a className="nav-link" href="https://www.google.com">Home </a>
                <a className="nav-link" href="https://www.google.com">Login </a>
                <a className="nav-link" href="https://www.google.com">Register </a>
                <a className="nav-link" href="https://www.google.com">Shows & Movies </a>
            </nav>
        )
    }
}