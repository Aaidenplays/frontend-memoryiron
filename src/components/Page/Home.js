import React, { Component } from 'react'

export class Home extends Component {
  render () {
    return (
      <div>
        <h1>
          OMG YOU MADE IT HOME {this.props.location.state.currentUser.username}
        </h1>
        <div>
          <img src={this.props.location.state.currentUser.avatar}></img>
        </div>
      </div>
    )
  }
}

export default Home
