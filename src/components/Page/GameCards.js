import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';


export default class GameCards extends Component {
  render() {
    return (
      <Card>
        <div className='game-cards' onClick={() => this.props.cardChoice(this.props.card)}>
          <img className="ui image fluid" src={this.props.card.imgurl} alt='card'></img>
        </div>
      </Card>
    )
  };
};
