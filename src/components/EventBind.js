import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message: "Hello"
      }

  /* binding in the class constructor */
      // this.clickHandler = this.clickHandler.bind(this); (good approach) 
  /* binding in the class constructor */

    }

  /* binding in render approach */
      // clickHandler() {
      //     this.setState({
      //         message: 'Good bye'
      //     })
      //     console.log('binding in render::::', this)
      // }
  /* binding in render approach */


  /* binding in the class property as arrow functions */
        clickHandler = () => {
          this.setState({
            message: 'Good bye'
          })
          console.log('class property::::', this)
        }
  /* binding in the class property as arrow functions */
    
  render() {
    return (
      <div className='containerFtn'>
        <h2 className="ctn-head">Event Binding</h2>
           <div>{this.state.message}</div> 
      
          {/* --------------binding in render approach --------------- 
         <button onClick={this.clickHandler.bind(this)}>Click me</button> */} 

            {/* ---------------Arrow function in rnder approach --------------- 
          <button onClick={() => this.clickHandler()}>Click me</button> */}

          {/* ---------------binding in the class constructor OR class property as arrow functions---------------  */}
            <button onClick={this.clickHandler}>Click me</button>
      </div>
    )
  }
}

export default EventBind

// binding in render
// arrow function in render
// binding in the class constructor
// class property as arrow functions
