import React from "react";

class CounterComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counterValue: 0
    };
    this.incrementCounter = this.incrementCounter.bind(this);
  }

  incrementCounter() {
    this.setState(prevState => ({
      counterValue: prevState.counterValue + 1
    }));
  }

  render() {
    if (this.state.counterValue === 2) {
      throw new Error("Crashed!");
    }

    return (
      <div className="error-boundary-wrapper">
          <h3>Error Boundary</h3>
        <button onClick={this.incrementCounter}>Increment Value</button>
        <p>Value of counter: {this.state.counterValue}</p>
      </div>
    );
  }
}

export default CounterComponent;
