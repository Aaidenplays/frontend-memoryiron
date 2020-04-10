import React from 'react';
import './App.css';
import Signup from './components/Users/Signup';
import Signin from './components/Users/Signin';
import Navbar from './components/Page/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App () {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Route exact path='/signin' component={Signin} />
        <Route exact path='/signup' component={Signup} />
      </div>
    </Router>
  )
}

export default App