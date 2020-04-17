import React, { Component } from "react";
import GameBoard from './GameBoard';
import LeaderBoard from './LeaderBoard';
import UserProfile from './UserProfile';
import { Container } from 'semantic-ui-react';


export default class MainCanvas extends Component {

  render() {
    return (
      <Container>
        <div className="content">
          {this.props.gridSize > 1 ?
            <GameBoard
              handleSelect={this.props.handleSelect}
              game={this.props.game}
              gridSize={this.props.gridSize}
              cardChoice={this.props.cardChoice}
              score={this.props.score}
              holdFront={this.props.holdFront}
            /> :
            <UserProfile
              user={this.props.user}
            />
          }
          <LeaderBoard />
        </div>
      </Container>
    )
  };
};