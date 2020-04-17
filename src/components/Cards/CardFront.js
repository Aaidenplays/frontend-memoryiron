import React from 'react'
// import { Card } from 'semantic-ui-react'
// import flipWav from '../../audio/240776__f4ngy__card-flip.wav'

class CardFront extends React.Component {
  //   handleAudio = () => {
  //     return (
  //     this.playAudio()
  //     )
  //   }

  playAudio = () => {
    const audioEl = document.getElementsByClassName('audio-element')[0]
    audioEl.play()
  }

  render() {
    return (
      <div onClick={this.props.onClick}>
        <img
          className='ui image fluid'
          src={this.props.card.imgurl}
          alt='card'
          onClick={this.playAudio}
        ></img>
      </div>
    )
  }
}

export default CardFront
