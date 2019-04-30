import React from 'react';
import './App.css';
import Shows from './components/showDatabase'
import SignUp from './components/userSignupForm'
import Nav from './components/navbar'

function App() {
  return (
    <div>
      <Nav />
      <Shows />
      <SignUp />
    </div>
  );
}

export default App;
