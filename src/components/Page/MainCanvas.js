import React, { Component } from "react";
import GameBoard from './GameBoard';
import LeaderBoard from './LeaderBoard';
import UserLogin from './UserProfile';
import { Container } from 'semantic-ui-react';


export default class MainCanvas extends Component {

  render() {
    return (
      <Container>
        <div className="content">
          <UserLogin />
          {this.props.gridSize > 1 ?
            <GameBoard
              handleSelect={this.props.handleSelect}
              game={this.props.game}
              gridSize={this.props.gridSize}
              cardChoice={this.props.cardChoice}
            /> : null}
          <LeaderBoard />
        </div>
      </Container>
    )
  };
};