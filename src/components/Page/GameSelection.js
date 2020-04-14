import React, { Component } from 'react'

export default class GameSelection extends Component {
  render() {
    return (
      <div>
        <h2>Game Select</h2>
        <span>select game grid size below<br></br></span>
        <select onChange={e => this.props.handleSelect(e.target.value)}>
          <option value='1'></option>
          <option value='4'>4 x 4</option>
          <option value='6'>6 x 6</option>
          <option value='8'>8 x 8</option>
        </select>
      </div>
    )
  };
};