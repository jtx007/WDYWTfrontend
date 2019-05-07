import React from 'react';
import './App.css';
import { withRouter, Route } from 'react-router-dom'
import Shows from './components/showDatabase'
import SignUp from './components/userSignupForm'
import Home from './components/home'
import Nav from './components/navbar'
import Profile from './components/profile'
import Login from './components/login'

function App() {
  return (
    <div>
      <Nav />
      <Route exact path='/' component={Home} />
      <Route exact path='/signup' component={SignUp}/>
      <Route exact path='/shows' component={Shows} />
      <Route exact path='/profile' component={Profile} />
      <Route exact path='/login' component={Login} />

    </div>
  );
}

export default withRouter(App);
