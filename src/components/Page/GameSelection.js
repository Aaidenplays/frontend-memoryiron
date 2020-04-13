import React, { Component } from 'react'

export default class GameSelection extends Component {
  render() {
    return (
      <div>
        <h1>Game Select</h1>
        <span>select game grid size below<br></br></span>
        <select onChange={e => this.props.handleSelect(e.target.value)}>
          <option value='null'></option>
          <option value='easy'>4 x 4</option>
          <option value='medium'>6 x 6</option>
          <option value='hard'>8 x 8</option>
        </select>
      </div>
    )
  }
}
