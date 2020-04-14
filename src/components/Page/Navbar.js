import React from 'react'

class Navbar extends React.Component {
  render() {
    return (
      <div>
      {/* <NavLink 
        to="/home"
          exact
          style={link}
          activeStyle={{
            background: 'darkblue'
          }}>Home</NavLink> */}
        <NavLink
          to="/signin"
          /* set exact so it knows to only set activeStyle when route is deeply equal to link */
          exact
          /* add styling to Navlink */
          style={link}
          /* add prop for activeStyle */
          activeStyle={{
            background: 'darkblue'
          }}
        >Sign in</NavLink>
        <NavLink
          to="/signup"
          exact
          style={link}
          activeStyle={{
            background: 'darkblue'
          }}
        >Sign up</NavLink>
        <button className="ui button active">User Profile</button>
        <button className="ui button active">Game Board</button> 
        <button className="ui button active">Leader Board</button>
      </div>
    )
  };
};

export default Navbar;