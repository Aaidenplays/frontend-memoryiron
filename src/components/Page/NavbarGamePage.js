import React from 'react'
// import { NavLink } from 'react-router-dom'

class NavbarGamePage extends React.Component {
  render() {
    return (
      <div>
        <button onClick={e => this.props.handleSelect(e.target.value)} value='1' className='ui button active'>User Profile</button>
        <button className='ui button active'>Leader Board</button>
      </div>
    )
  }
}

export default NavbarGamePage
