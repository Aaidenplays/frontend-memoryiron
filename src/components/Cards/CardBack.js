import React from 'react'
// import { Card } from 'semantic-ui-react';
// import fiPic from '../../../public/flatironschool.png'

class CardBack extends React.Component {
    playAudio = () => {
        const audioEl = document.getElementsByClassName('audio-element')[0]
        audioEl.play()
      }
    render() {
        return (
            <div onClick={this.props.onClick}>
                <img onClick={this.playAudio} className='ui image fluid' src='flatironschool.png' alt="flatiron logo"/>
            </div>
        )
    }
}

export default CardBack
