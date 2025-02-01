import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Parent message'
      }
      this.greetParent = this.greetParent.bind(this)
    }

    greetParent(childName) {
        alert(`Hi Dudu ${this.state.message} ${childName}`)
    }
    
  render() {
    return (
        <div className="containerFtn">
              <h2 className="ctn-head">Parent-child data sharing</h2>
            <ChildComponent greetHandler={this.greetParent}/>
      </div>
    )
  }
}

export default ParentComponent


// Define the method in the parent component
// on the child component tag pass the method as props
// In the child component access the method using the props object
// If you want pass an parameter use arrow function in the child component
