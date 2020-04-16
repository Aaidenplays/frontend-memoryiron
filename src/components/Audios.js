import React, { Component } from 'react'
import flipWav from '../audio/240776__f4ngy__card-flip.wav'


export class Audios extends Component {
  render () {
    return (
      <div>
        <audio className='audio-element'>
          <source src={flipWav}></source>
        </audio>
      </div>
    )
  }
}

export default Audios
