import React from 'react'
import { Card } from 'semantic-ui-react'

class CardFront extends React.Component {
  render () {
    return (
      <div onClick={this.props.onClick}>
        <img
          className='ui image fluid'
          src={this.props.card.thumbnailUrl}
          alt='card'
        ></img>
      </div>
    )
  }
}

export default CardFront
