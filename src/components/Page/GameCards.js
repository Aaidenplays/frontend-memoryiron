import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';


export default class GameCards extends Component {
  render() {
    return (
      <Card>
        <div className='game-cards'>
          <img className="ui image fluid" src={this.props.card.thumbnailUrl} alt='card'></img>
        </div>
      </Card>
    )
  };
};
