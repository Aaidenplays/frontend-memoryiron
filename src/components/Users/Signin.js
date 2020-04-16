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
      redirect: false,
      images: []
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
        {
          this.props.handleLogIn(this.state.user)
        }
        //Use redirect and pass this user as a current_user prop
      })
  }

  componentDidMount = () => {
    fetch('http://localhost:3001/cards')
      .then(resp => resp.json())
      .then(data => {
        // console.log(data[0].imgurl)
        this.setState({
          images: data
        })
      })
  }

  showCards = () => {
    console.log('IMAGES********::::::: ', this.state.images)
    if (this.state.images.length > 0) {
      console.log('WE MADE IT!')
      return this.state.images.map((image, idx) => (
        <img key={idx} src={`${image.imgurl}`} />
      ))
    }
  }

  render () {
    return (
      <div>
        <br />
        {this.showCards()}
        <form onSubmit={this.authUser}>
          <label>Username</label>
          <input
            className='ui input'
            type='text'
            onChange={this.handleUsername}
          />
          {/* <label>Password</label>
          <input type='password' onChange={this.handlePassword}/> */}
          <input type='submit' value='submit' />
        </form>
        {this.state.redirect ? (
          <Redirect
            to={{
              pathname: '/home',
              state: { currentUser: this.state.user }
            }}
          />
        ) : null}
      </div>
    )
  }
}

export default Signin
