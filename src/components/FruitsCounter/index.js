// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mangoCount: 0, bananaCount: 0}

  onMango = () => {
    this.setState(prevState => ({mangoCount: prevState.mangoCount + 1}))
  }

  onBanana = () => {
    this.setState(prevState => ({bananaCount: prevState.bananaCount + 1}))
  }

  render() {
    const {mangoCount, bananaCount} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">
            Bob ate{' '}
            <span className="count-1">
              {mangoCount} {''}
            </span>
            mangoes <span className="count-2">{bananaCount}</span> bananas
          </h1>
          <div className="img-container">
            <div>
              <img
                className="img-1"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <button className="btn" type="button" onClick={this.onMango}>
                Eat Mango
              </button>
              <img
                className="img-2"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <button className="btn" type="button" onClick={this.onBanana}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
