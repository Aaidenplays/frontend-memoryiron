import React, { Component } from 'react'
import flipWav from '../audio/240776__f4ngy__card-flip.wav'
import incorrect from '../audio/incorrect.wav'
import correct from '../audio/correct.wav'



export class Audios extends Component {
  render () {
    return (
      <div>
        <audio className='audio-element'>
          <source src={flipWav}></source>
        </audio>
        {/* <audio className='audio-correct'>
          <source src={correct}></source>
        </audio>
        <audio className='audio-incorrect'>
          <source src={incorrect}></source>
        </audio> */}
      </div>
    )
  }
}

export default Audios
