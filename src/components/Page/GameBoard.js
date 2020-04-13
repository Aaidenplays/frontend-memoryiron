import React, { Component } from 'react';
import GameCards from './GameCards';
import { Card } from 'semantic-ui-react';


export default class GameBoard extends Component {
  render() {
    return (
      <div>
        <h1>Game Board</h1>
        <Card.Group itemsPerRow={this.props.gridSize}>
          {this.props.game.map((card, idx) => (
            <GameCards key={idx} card={card} />
          ))}
        </Card.Group>
      </div>
    )
  }
}
