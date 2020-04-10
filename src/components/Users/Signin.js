import React, { Component } from 'react'

class Signin extends Component {
constructor(){
    super()
    
}

  render () {
    return (
      <div>
        <form onSubmit={this.postUser}>
          <label>Username</label>
          <input type='text' onChange={this.handleUsername} />
          <label>Password</label>
          <input type='password' onChange={this.handlePassword} />
        </form>
      </div>
    )
  }
}

export default Signin
