import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onIncreament = () => {
    this.setState(prev => ({
      count: prev.count + 10,
    }))
  }

  onDegrement = () => {
    this.setState(prev => ({
      count: prev.count - 10,
    }))
  }

  render() {
    const {count} = this.state

    return (
      <div className="container">
        <h1>SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="nareshspeedometer"
        />
        <h1>Speed is {count}mph</h1>
        <p>Min Limit is 0mph, Max Limit is 200mph</p>

        <div>
          <button className="accelerate" onClick={this.onIncreament}>
            Accelerate
          </button>
          <button className="applybrake" onClick={this.onDegrement}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer
