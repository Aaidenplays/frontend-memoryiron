import React, { Component } from 'react'

class Signup extends Component {
  constructor () {
    super()
    this.state = {
      username: undefined,
      password: undefined,
      bio: undefined,
      avatar: undefined
    }
  }

  postUser = (e) => {
    e.preventDefault()
    fetch('http://localhost:3001/api/v1/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          user: {
            username: this.state.username,
            password: this.state.password,
            bio: this.state.bio,
            avatar: this.state.avatar
          }
        })
      })
        .then(r => r.json())
        .then(console.log)
  }

  handleUsername = (e) => {
    this.setState({
        username: e.target.value
    })
  }

  handlePassword = (e) => {
    this.setState({
        password: e.target.value
    })
  }

  handleBio = (e) => {
    this.setState({
        bio: e.target.value
    })
  }

  handleAvatar = (e) => {
    this.setState({
        avatar: e.target.value
    })
  }
  

  render () {
    return (
      <div>
        <form onSubmit={this.postUser}>
          <label>Username</label>
          <input type='text' onChange={this.handleUsername}/>
          <label>Password</label>
          <input type='password' onChange={this.handlePassword}/>
          <label>Bio</label>
          <input type='textarea' onChange={this.handleBio}/>
          <label>avatar</label>
          <input type='url' onChange={this.handleAvatar}/>
        <input type='submit' value='Submit'/>
        </form>
      </div>
    )
  }
}

export default Signup
