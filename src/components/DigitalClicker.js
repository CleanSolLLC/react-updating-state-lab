import React, { Component } from "react";

class DigitalClicker extends Component {
  constructor() {
    super()
    this.state = {
      timesClicked: 0,
    }
  }

  clickHandler = () => {
    this.setState(previousState => {
      return {
          timesClicked: previousState.timesClicked + 1 
      }
    })   
  }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>
            <label>{this.state.timesClicked}</label>
        </button>
      </div>
    )
  }
}
export default DigitalClicker
