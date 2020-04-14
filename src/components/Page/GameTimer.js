import * as React from 'react'
import ReactStopwatch from 'react-stopwatch'

class GameTimer extends React.Component {
  constructor () {
    super()
    this.state = {
      start: false
    }
  }

  handleStart = () => {
    this.setState({
      start: !this.state.start
    })
  }

  renderStopWatch = () => {
    return (
      <ReactStopwatch
        seconds={0}
        minutes={0}
        hours={0}
        // limit='00:00:10'
        onChange={({ hours, minutes, seconds }) => {
          // do something
        }}
        onCallback={() => console.log('Finish')}
        render={({ formatted, hours, minutes, seconds }) => {
          return (
            <div>
              {/* <p>
      Formatted: { formatted }
    </p>
    <p>
      Hours: { hours }
    </p>*/}
              <p>
                Minutes: {minutes}   Seconds: {seconds}
              </p>
            </div>
          )
        }}
      />
    )
  }

  render () {
    return (
      <div>
        {this.state.start ? (
          [
            <button onClick={this.handleStart}>Stop</button>,
            this.renderStopWatch()
          ]
        ) : (
          <button onClick={this.handleStart}>Start</button>
        )}
      </div>
    )
  }
}

export default GameTimer

// const Stopwatch = () => (
// <ReactStopwatch
//   seconds={0}
//   minutes={0}
//   hours={0}
//   limit="00:00:10"
//   onChange={({ hours, minutes, seconds }) => {
//     // do something
//   }}
//   onCallback={() => console.log('Finish')}
//   render={({ formatted, hours, minutes, seconds }) => {
//     return (
//       <div>
//       <button
//         onClick={this.hangleStart}
//       >Start</button>
//       <button
//         onClick={this.handleStop}
//       >Stop</button>
//         {/* <p>
//           Formatted: { formatted }
//         </p>
//         <p>
//           Hours: { hours }
//         </p>
//         <p>
//           Minutes: { minutes }
//         </p> */}
//         <p>
//           Seconds: { seconds }
//         </p>
//       </div>
//     );
//   }}
//  />
// );
// export default Stopwatch;

// export default class GameTimer extends Component {

//   render() {
//     return (
//       <div>

//       </div>
//     )
//   }
// }
