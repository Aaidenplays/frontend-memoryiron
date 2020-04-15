import React from 'react'
import { Card } from 'semantic-ui-react';

class CardBack extends React.Component {
    render() {
        return (
            <div onClick={this.props.onClick}>
                <img className='ui image fluid' src='https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fentries%2Ficons%2Ffacebook%2F000%2F026%2F942%2Fbibble.jpg'/>
            </div>
        )
    }
}

export default CardBack
