// rce create class component
import React, { Component } from 'react'

class SetStateCounter extends Component {


// recons
constructor(props) {
  super(props)
  this.state = {
     count: 0
  }
}

increment() {
    /*  this.setState(
    {
        count: this.state.count + 1
    },
    () => {
        console.log("this call back", this.state.count);  
    }) */

    this.setState((prevStae) => ({
        count: prevStae.count + 1
    }))

  //  console.log("this", this.state.count);
}

incrementFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
}

render() {
    return (
        <div className="containerFtn">
             <h2 className="ctn-head">SetState()</h2>
            <div>Count - {this.state.count}</div>
            <button className="click-btn" onClick={() => this.incrementFive()}>increment</button>
      </div>
    )
  }
}

export default SetStateCounter
