import React from 'react'
import './App.css'
import Signup from './components/Users/Signup'
import Signin from './components/Users/Signin'
import Navbar from './components/Page/Navbar'
import Home from './components/Page/Home'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App () {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div><br/>
          <Route exact path='/signin' component={Signin} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/home' component={Home} />
        </div>
      </div>
    </Router>
  )
}

export default App
