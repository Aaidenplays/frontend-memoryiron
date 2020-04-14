import React, { Component } from "react";
import GameTimer from './GameTimer';
import Navbar from './Navbar';

export default class Header extends Component {

  render() {
    return (
      <div className="header">
        <h1 className="ui header">Memroyiron</h1>
        <GameTimer />
        <Navbar />
      </div>
    )
  };
};