import React from 'react'
import './App.css';
import Signup from './components/Users/Signup';
import Signin from './components/Users/Signin';
import Navbar from './components/Page/NavbarUser';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Memoryiron from './components/Page/Memoryiron.js'
import Audios from './components/Audios';

class App extends React.Component {
  constructor(){
    super()
    this.state={
      isLoggedIn: false,
      user: undefined
    }
  }

  setIsLoggedIn = (user) => {
    this.setState({
      isLoggedIn: !this.state.isLoggedIn
    })
    this.setState({
      user
    })
  }

  handleNavSwitch = () => {
    return [<Navbar />, 
    <Route exact path='/signin' render={() => <Signin handleLogIn={this.setIsLoggedIn}/>} />,
    <Route exact path='/signup' component={Signup} />]
  }


  render() {
    return (
      <div>
      <Audios/>
    <Router>
      <div className='App'>
      {this.state.isLoggedIn ? <Memoryiron user={this.state.user} />:this.handleNavSwitch()}
      </div>
    </Router>
  </div>
    )
  }
}

export default App
