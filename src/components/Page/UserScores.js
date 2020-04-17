import React, { Component } from 'react'

export default class UserScores extends Component {

  totalScore = (score) => {
    return score = ((score / 2) * 3.1415) / 10
  };

  render() {
    return (
      <div>
        {this.props.user ? (
          <div>
            {this.props.user.username}, your current score is:<br />
            {this.totalScore(this.props.score)}
          </div>
        ) : null}

      </div>
    )
  }
}
