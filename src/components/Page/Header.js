import React, { Component } from "react";
import GameTimer from './GameTimer';

export default class Header extends Component {

  render() {
    return (
      <div className="header">
        <div>Memroyiron</div>
        <GameTimer />
      </div>
    )
  };
};