import React, { Component } from "react";
import GameBoard from './GameBoard';
import LeaderBoard from './LeaderBoard';
import UserLogin from './UserLogin';

export default class MainCanvas extends Component {

  render() {
    return (
      <div className="content">
        {/* <div>MainCanvas Container Component</div> */}
        <UserLogin />
        <GameBoard game={this.props.game}/>
        <LeaderBoard />
      </div>
    )
  };
};