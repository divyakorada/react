import React, { Component } from 'react'

export class ConditionalRendering extends Component {

   constructor(props) {
     super(props)
   
     this.state = {
        isLoggedIn: true
     }
   }
   
    
  render() {

    /*Short circuit operator */
    return this.state.isLoggedIn && <div className="containerFtn">
        <h2 className="ctn-head">ConditionalRendering</h2>
        Welcome Divya</div>

    /* Ternary conditional operator */
    // return(this.state.isLoggedIn ? (<div>Welcome Divya</div>) : (<div>You are not logged</div>))

    /*  Element variables */
    // let message;
    // if(this.state.isLoggedIn) {
    //    message = <div>Welcome Divya</div>
    // } else {
    //     message = <div>You are not logged</div>
    // }
    //     return <div>{message}</div>

    /*  Simple If else */
    // if(this.state.isLoggedIn) {
    //     return <div>Welcome Divya</div>
    // } else {
    //     return <div>you are not logged</div>
    // }

    // return (
    //   <div></div>
    // )
  }
}

export default ConditionalRendering
