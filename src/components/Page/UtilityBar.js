import React, { Component } from "react";
import UserScores from './UserScores';
import GameSelection from './GameSelection';

export default class UtilityBar extends Component {

  render() {
    return (
      <div className="utilitybar">
        <GameSelection handleSelect={this.props.handleSelect} game={this.props.game}/>
        <UserScores />
      </div>
    )
  };
};