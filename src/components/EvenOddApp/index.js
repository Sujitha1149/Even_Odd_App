import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {
    count: 0,
    countText: 'Count is Even',
  }

  onIncrement = () => {
    const {count, countText} = this.state
    const randomNumber = Math.ceil(Math.random() * 100)
    const num = randomNumber + count
    if (num % 2 === 0) {
      this.setState({
        count: num,
        countText: 'Count is Even',
      })
    } else {
      this.setState({
        count: num,
        countText: 'Count is Odd',
      })
    }
  }

  render() {
    const {count, countText} = this.state
    return (
      <div className="bg-container">
        <div className="eve-dd-cont">
          <h1 className="heading">
            Count <span>{count}</span>
          </h1>
          <p className="para1">{countText}</p>
          <button type="button" className="button" onClick={this.onIncrement}>
            Increment
          </button>
          <p className="para2">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
