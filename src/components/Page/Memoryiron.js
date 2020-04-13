import React, { Component } from "react";
import Header from './Header';
import UtilityBar from './UtilityBar';
import MainCanvas from './MainCanvas';

export default class Memoryiron extends Component {

  render() {
    return (
      <div>
        <Header />
        <UtilityBar />
        <MainCanvas />
      </div>
    )
  };
};