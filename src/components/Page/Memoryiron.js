import React, { Component } from "react";
import Header from './Header';
import UtilityBar from './UtilityBar';
import MainCanvas from './MainCanvas';
import { Container } from 'semantic-ui-react';


const testAPIURL = 'http://jsonplaceholder.typicode.com/photos/?_limit=256'

export default class Memoryiron extends Component {
  constructor() {
    super()
    this.state = {
      gameDeck: [],
      playGame: [],
      gridSize: 1,
      firstCard: 0,
      secondCard: 0,
      isMatch: false,
      allMatch: 0,
    };
  };

  componentDidMount() {
    fetch(testAPIURL)
      .then(res => res.json())
      .then(gameDeck => this.setState({ gameDeck }))
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.secondCard !== this.state.secondCard && this.state.secondCard !== 0) {
      this.cardMatch();
    };
  };

  handleSelect = (selection) => {
    if (selection === '1') {
      this.nullGame()
    } else if (selection === '4') {
      this.fourByFour()
    } else if (selection === '6') {
      this.sixBySix()
    } else if (selection === '8') {
      this.eightByEight()
    };
  };

  helperFunctClearStates = () => {
    this.setState({ firstCard: 0 })
    this.setState({ secondCard: 0 })
    this.setState({ isMatch: false })
  };

  nullGame = () => {
    this.setState({ playGame: [] })
    this.setState({ gridSize: 1 })
    this.setState({ allMatch: 0 })
    this.helperFunctClearStates()
  };

  fourByFour = () => {
    let shuffleCards = this.state.gameDeck.sort(() => Math.random() - 0.5);
    let selectedCardsA = shuffleCards.slice(0, 8);
    let selectedCardsB = shuffleCards.slice(0, 8);

    selectedCardsB.map(card => (
      selectedCardsA.push(card)
    ))

    let playGame = selectedCardsA.sort(() => Math.random() - 0.5);
    this.setState({ playGame })
    this.setState({ gridSize: 4 })
    this.setState({ allMatch: 0 })
    this.helperFunctClearStates()

  };

  sixBySix = () => {
    let shuffleCards = this.state.gameDeck.sort(() => Math.random() - 0.5);
    let selectedCardsA = shuffleCards.slice(0, 18);
    let selectedCardsB = shuffleCards.slice(0, 18);

    selectedCardsB.map(card => (
      selectedCardsA.push(card)
    ))

    let playGame = selectedCardsA.sort(() => Math.random() - 0.5);
    this.setState({ playGame })
    this.setState({ gridSize: 6 })
    this.setState({ allMatch: 0 })
    this.helperFunctClearStates()

  };

  eightByEight = () => {
    let shuffleCards = this.state.gameDeck.sort(() => Math.random() - 0.5);
    let selectedCardsA = shuffleCards.slice(0, 32);
    let selectedCardsB = shuffleCards.slice(0, 32);

    selectedCardsB.map(card => (
      selectedCardsA.push(card)
    ))

    let playGame = selectedCardsA.sort(() => Math.random() - 0.5);

    this.setState({ playGame })
    this.setState({ gridSize: 8 })
    this.setState({ allMatch: 0 })
    this.helperFunctClearStates()

  };

  cardChoice = (card) => {
    switch (true) {
      case this.state.firstCard === 0 && this.state.secondCard === 0:
        this.setState({ firstCard: card.id });
        // this.setState({ playGame: this.state.playGame.map((c) => c.id === card.id ? { ...c, flipped: true } : c) })
        break;
      case this.state.firstCard > 0 && this.state.secondCard === 0:
        this.setState({ secondCard: card.id });
        // this.setState({ playGame: this.state.playGame.map((c) => c.id === card.id ? { ...c, flipped: true } : c) })
        break;
        // no default
    };
  };

  cardMatch = () => {
    switch (true) {
      case this.state.firstCard === this.state.secondCard:
        alert('Matched!!');
        this.setState({ isMatch: true });
        let allMatch = this.state.allMatch + 2;
        this.setState({ allMatch });
        this.state.playGame.map((card,idx)=> {
          let key = idx;
          if (card.id === this.state.firstCard){
              card.setState({
                isMatched: true
              })
          }
        })
        // console.log(matchedCards)
        // matchedCards.map()
        // this.setState({ playGame: this.state.playGame.map((c) => c.id === card.id ? { ...c, isMatched: true } : c) })
        this.helperFunctClearStates()
        break;
      case this.state.firstCard !== this.state.secondCard:
        alert('no match');
        this.helperFunctClearStates()
        break;
        // no default
    };
  };



  render() {
    return (
      <Container>
        <div>
          <Header user={this.props.user} />
          <UtilityBar handleSelect={this.handleSelect} game={this.state.gameDeck} />
          <MainCanvas
            handleSelect={this.handleSelect}
            game={this.state.playGame}
            gridSize={this.state.gridSize}
            cardChoice={this.cardChoice}
          />
        </div>
      </Container>
    )
  };
};