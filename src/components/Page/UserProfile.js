import React, { Component } from 'react'

export default class UserProfile extends Component {
  // componentDidMount() {
  //   return <div>
  //     {/* {console.log(this.props.user)} */}
  //     {this.props.user.username}
  //   </div>

  // };
  render() {
    return (
      <div>
        {this.props.user ? (<h3>{this.props.user.username}</h3>) : null}
        {this.props.user ? <div><img alt="user" src={this.props.user.avatar}></img></div> : null}
        {this.props.user ? <div>{this.props.user.bio}</div> : null}
      </div>
    )
  }
}
