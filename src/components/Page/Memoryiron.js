import React, { Component } from 'react'
import Header from './Header'
import UtilityBar from './UtilityBar'
import MainCanvas from './MainCanvas'
import { Container } from 'semantic-ui-react'

const imgAPIURL = 'http://localhost:3001/cards'

export default class Memoryiron extends Component {
  constructor () {
    super()
    this.state = {
      gameDeck: [],
      game: [],
      gridSize: 1,
      firstCard: 0,
      secondCard: 0,
      isMatch: false,
      score: 0,
      holdFront: false
    }
  }

  componentDidMount () {
    fetch(imgAPIURL)
      .then(res => res.json())
      // .then(gameDeck => console.log(gameDeck))
      .then(gameDeck => this.setState({ gameDeck }))
  }

  componentDidUpdate (prevProps, prevState) {
    if (
      prevState.secondCard !== this.state.secondCard &&
      this.state.secondCard !== 0
    ) {
      this.cardMatch()
    }
  }

  handleSelect = selection => {
    if (selection === '1') {
      this.nullGame()
    } else if (selection === '4') {
      this.playMusicAudio()
      this.fourByFour()
    } else if (selection === '6') {
      this.playMusicAudio()
      this.sixBySix()
    } else if (selection === '8') {
      this.playMusicAudio()
      this.eightByEight()
    }
  }

  helperFunctClearStates = () => {
    this.setState({ firstCard: 0 })
    this.setState({ secondCard: 0 })
    this.setState({ isMatch: false })
  }

  nullGame = () => {
    this.setState({ game: [] })
    this.setState({ gridSize: 1 })
    this.helperFunctClearStates()
    this.setState({ score: 0 })
  }

  fourByFour = () => {
    let shuffleCards = this.state.gameDeck.sort(() => Math.random() - 0.5)
    let selectedCardsA = shuffleCards.slice(0, 8)
    let selectedCardsB = shuffleCards.slice(0, 8)

    selectedCardsB.map(card => selectedCardsA.push(card))

    let game = selectedCardsA.sort(() => Math.random() - 0.5)
    this.setState({ game })
    this.setState({ gridSize: 4 })
    this.setState({ score: 0 })
    this.helperFunctClearStates()
  }

  sixBySix = () => {
    let shuffleCards = this.state.gameDeck.sort(() => Math.random() - 0.5)
    let selectedCardsA = shuffleCards.slice(0, 18)
    let selectedCardsB = shuffleCards.slice(0, 18)

    selectedCardsB.map(card => selectedCardsA.push(card))

    let game = selectedCardsA.sort(() => Math.random() - 0.5)
    this.setState({ game })
    this.setState({ gridSize: 6 })
    this.setState({ score: 0 })
    this.helperFunctClearStates()
  }

  eightByEight = () => {
    let shuffleCards = this.state.gameDeck.sort(() => Math.random() - 0.5)
    let selectedCardsA = shuffleCards.slice(0, 32)
    let selectedCardsB = shuffleCards.slice(0, 32)

    selectedCardsB.map(card => selectedCardsA.push(card))

    let game = selectedCardsA.sort(() => Math.random() - 0.5)

    this.setState({ game })
    this.setState({ gridSize: 8 })
    this.setState({ score: 0 })
    this.helperFunctClearStates()
  }

  playMusicAudio = () => {
    const audioEl = document.getElementsByClassName('audio-music')[0]
    audioEl.play()
  }

  playCorrectAudio = () => {
    const audioEl = document.getElementsByClassName('audio-correct')[0]
    audioEl.play()
  }
  playIncorrectAudio = () => {
    const audioEl = document.getElementsByClassName('audio-incorrect')[0]
    audioEl.play()
  }

  cardChoice = card => {
    switch (true) {
      case this.state.firstCard === 0 && this.state.secondCard === 0:
        let firstCard = card.id
        // console.log(firstCard);
        this.setState({ firstCard })
        break
      case this.state.firstCard > 0 && this.state.secondCard === 0:
        let secondCard = card.id
        // console.log(secondCard);
        this.setState({ secondCard })
        break
      // no default
    }
  }

  cardMatch = () => {
    console.log('do these match?')
    switch (true) {
      case this.state.firstCard === this.state.secondCard:
        {
          this.playCorrectAudio()
        }
        this.setState({ isMatch: true })
        let score = this.state.score + 2
        this.setState({ score })
        console.log('match')
        this.helperFunctClearStates()
        break
      case this.state.firstCard !== this.state.secondCard:
        {
          this.playIncorrectAudio()
        }
        console.log('no match')
        // this.autoFlip(this.state.firstCard, this.state.secondCard)
        this.helperFunctClearStates()
        break
      // no default
    };
  };

  // autoFlip = (card1, card2) => {
  //   card1 = this.state.gameDeck.filter(card => {
  //     return card.id === card1
  //   })
  //   console.log('CARD1:::', card1)
  //   card2 = this.state.gameDeck.filter(card => {
  //     return card.id === card2
  //   })
  //   console.log('CARD2:::', card2)
  //   if (card1.length > 0 && card2 > 0) {
  //     console.log('YOU MADE IT')
  //     card1.first.setState({
  //       isFlipped: false
  //     })
  //     console.log('YOU MADE IT')
  //     card2.first.setState({
  //       isFlipped: false
  //     })
  //   }
  // }

  render() {
    return (
      <Container>
        <div>
          <Header user={this.props.user} handleSelect={this.handleSelect} />
          <UtilityBar
            handleSelect={this.handleSelect}
            game={this.state.gameDeck}
            user={this.props.user}
            score={this.state.score}
          />
          <MainCanvas
            handleSelect={this.handleSelect}
            game={this.state.game}
            gridSize={this.state.gridSize}
            cardChoice={this.cardChoice}
            user={this.props.user}
            // score={this.state.score}
            holdFront={this.state.holdFront}
          />
        </div>
      </Container>
    )
  };
};


// parent component App

