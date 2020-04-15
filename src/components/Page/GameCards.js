import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'
import ReactCardFlip from 'react-card-flip'
import Cardfront from '../Cards/CardFront'
import Cardback from '../Cards/CardBack'


// export default class GameCards extends Component {
//   render() {
//     return (
//       <Card>
//         <div className='game-cards' onClick={() => this.props.cardChoice(this.props.card)}>
//           <img className="ui image fluid" src={this.props.card.thumbnailUrl} alt='card'></img>
//         </div>
//       </Card>
//     )
//   };
// };

class GameCards extends React.Component {
  constructor () {
    super()
    this.state = {
      isFlipped: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (e) {
    e.preventDefault()
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }))
  }

  render () {
    return (
      <Card>
      <ReactCardFlip
          isFlipped={this.state.isFlipped}
          flipDirection='vertical'
        >
          <Cardback onClick={this.handleClick}>
            This is the back of the card.
          </Cardback>
          <Cardfront card={this.props.card} onClick={this.handleClick}>
            This is the front of the card.
          </Cardfront>
        </ReactCardFlip>
      </Card>
    )
  }
}
export default GameCards
