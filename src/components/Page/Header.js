import React, { Component } from "react";
import GameTimer from './GameTimer';
import NavbarGamePage from './NavbarGamePage';

export default class Header extends Component {

  render() {
    return (
      <div className="header">
        <h1 className="ui header">Memoryiron</h1>
        {/* {this.props.user ? (<p>Current User: {this.props.user.username}</p>) : null} */}
        <GameTimer />
        <NavbarGamePage handleSelect={this.props.handleSelect} />
      </div>
    )
  };
};