import React, { Component } from "react";
import Header from './Header';
import UtilityBar from './UtilityBar';
import MainCanvas from './MainCanvas';
import { Container } from 'semantic-ui-react';


const testAPIURL = 'http://jsonplaceholder.typicode.com/photos'

export default class Memoryiron extends Component {
  constructor() {
    super()
    this.state = {
      gameBoard: [],
      playGame: [],
      gridSize: 1
    };
  };

  componentDidMount() {
    fetch(testAPIURL)
      .then(res => res.json())
      .then(gameBoard => this.setState({ gameBoard }))
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

  nullGame = () => {
    this.setState({ playGame: [] })
    this.setState({ gridSize: 1 })
      };

  fourByFour = () => {
    let shuffleCards = this.state.gameBoard.sort(() => Math.random() - 0.5);
    let selectedCardsA = shuffleCards.slice(0, 8);
    let selectedCardsB = shuffleCards.slice(0, 8);

    selectedCardsB.map(card => (
      selectedCardsA.push(card)
    ))

    let playGame = selectedCardsA.sort(() => Math.random() - 0.5);
    this.setState({ playGame })
    this.setState({ gridSize: 4 })
  };

  sixBySix = () => {
    let shuffleCards = this.state.gameBoard.sort(() => Math.random() - 0.5);
    let selectedCardsA = shuffleCards.slice(0, 18);
    let selectedCardsB = shuffleCards.slice(0, 18);

    selectedCardsB.map(card => (
      selectedCardsA.push(card)
    ))

    let playGame = selectedCardsA.sort(() => Math.random() - 0.5);
    this.setState({ playGame })
    this.setState({ gridSize: 6 })
  };

  eightByEight = () => {
    let shuffleCards = this.state.gameBoard.sort(() => Math.random() - 0.5);
    let selectedCardsA = shuffleCards.slice(0, 32);
    let selectedCardsB = shuffleCards.slice(0, 32);

    selectedCardsB.map(card => (
      selectedCardsA.push(card)
    ))

    let playGame = selectedCardsA.sort(() => Math.random() - 0.5);

    this.setState({ playGame })
    this.setState({ gridSize: 8 })
  };

  render() {
    return (
      <Container>
        <div>
          <Header />
          <UtilityBar handleSelect={this.handleSelect} game={this.state.gameBoard} />
          <MainCanvas handleSelect={this.handleSelect} game={this.state.playGame} gridSize={this.state.gridSize} />
        </div>
      </Container>
    )
  };
};