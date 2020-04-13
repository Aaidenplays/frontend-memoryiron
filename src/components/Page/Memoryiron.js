import React, { Component } from "react";
import Header from './Header';
import UtilityBar from './UtilityBar';
import MainCanvas from './MainCanvas';

const testAPIURL = 'http://jsonplaceholder.typicode.com/photos'

export default class Memoryiron extends Component {
  constructor() {
    super()
    this.state = {
      gameBoard: []
    };
  };

  componentDidMount() {
    fetch(testAPIURL)
      .then(res => res.json())
      .then(gameBoard => this.setState({ gameBoard }))
  };

  handleSelect = (selection) => {
    // if (selection == 'null') {

    // };
  };

  fourByFour = () => {
    // const board = this.state.gameBoard;
    // const shuffleCards = board.sort(() => Math.random() - 0.5);
    // const playBoard = shuffleCards.slice(0, 16);
    // return playBoard;

  };


  render() {
    return (
      <div>
        <Header />
        <UtilityBar handleSelect={this.handleSelect} game={this.state.gameBoard} />
        <MainCanvas game={this.state.gameBoard} />
      </div>
    )
  };
};