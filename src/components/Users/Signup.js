import React, { Component } from 'react'
import { Input } from 'semantic-ui-react'


class Signup extends Component {
  constructor () {
    super()
    this.state = {
      username: undefined,
      // password: undefined,
      bio: undefined,
      avatar: undefined
    }
  }

  postUser = e => {
    e.preventDefault()
    console.log(this.state.password)
    fetch('http://localhost:3001/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        user: {
          username: this.state.username,
          // password: this.state.password,
          bio: this.state.bio,
          avatar: this.state.avatar
        }
      })
    })
      .then(r => r.json())
      .then(data => {
          console.log(data)
        })
}
  //   handleAuthCreate = () =>{
  //       console.log(this.state.username)
  //     fetch('http://localhost:3001/api/v1/login', {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //           Accept: 'application/json'
  //         },
  //         body: JSON.stringify( this.state )
  //       })
      
  //     .then(resp => resp.json())
  //     .then(data => console.log(data))
  // }

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

  handleBio = e => {
    this.setState({
      bio: e.target.value
    })
  }

  handleAvatar = e => {
    this.setState({
      avatar: e.target.value
    })
  }

  render () {
    return (
      <div>
        <form onSubmit={this.postUser}>
          <label>Username</label>
          <input className='ui input' type='text' onChange={this.handleUsername} />
          {/* <label>Password</label>
          <input type='password' onChange={this.handlePassword} /> */}
          <label>Bio</label>
          <input className='ui input' type='text' onChange={this.handleBio} />
          <label>avatar</label>
          <input className='ui input' type='text' onChange={this.handleAvatar} />
          <input type='submit' value='Submit' />
        </form>
      </div>
    )
  }
}

export default Signup
