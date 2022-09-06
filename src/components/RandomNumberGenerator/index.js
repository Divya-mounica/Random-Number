import {Component} from 'react'

import './index.css'

class RandomNum extends Component {
  state = {count: 0}

  getRandom = () => Math.ceil(Math.random() * 100)

  onIncrement = () => {
    const random = this.getRandom()

    this.setState({count: random})
  }

  render() {
    const {count} = this.state

    return (
      <div className="app-container">
        <div className="random-number-generator-container">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random Number in the range of 0 to 100
          </p>
          <button
            type="button"
            className="generate-button"
            onClick={this.onIncrement}
          >
            Generate
          </button>
          <p className="random-number">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNum
