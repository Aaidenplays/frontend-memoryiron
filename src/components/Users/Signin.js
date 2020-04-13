import React, { Component } from 'react'
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom'
import { Input } from 'semantic-ui-react'


class Signin extends Component {
  constructor () {
    super()
    this.state = {
      username: undefined,
      // password: undefined,
      user: undefined,
      redirect: false
    }
  }

  handleUsername = e => {
    this.setState({
      username: e.target.value
    })
  }

  handlePassword = e => {
    this.setState({
      password: e.target.value
    })
  }
  
  authUser = e => {
    e.preventDefault()
    // const token = localStorage.token
    // console.log(token)
    // if(token){}
    fetch('http://localhost:3001/users')
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          user: data.find(
            element =>
              element.username.toLowerCase() ===
              this.state.username.toLowerCase()
          )
        })
        this.setState({
          redirect: true
        })
        //Use redirect and pass this user as a current_user prop
      })
  }

  render () {
    return (
      <div>
        <form onSubmit={this.authUser}>
          <label>Username</label>
          <input classname='ui input' type='text' onChange={this.handleUsername} />
          {/* <label>Password</label>
          <input type='password' onChange={this.handlePassword}/> */}
          <input type='submit' value='submit' />
        </form>
        {this.state.redirect ?
         <Redirect to={{
          pathname: '/home',
          state: {currentUser: this.state.user}
        }}/>
        : null}
      </div>
    )
  }
}

export default Signin
