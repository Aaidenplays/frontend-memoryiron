import React, { Component } from 'react'

export default class UserScores extends Component {
  render() {
    return (
      <div>
        <div>{this.props.user.username}</div>
      </div>
    )
  }
}
