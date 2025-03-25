import React, { Component } from 'react'

export class ClassChild extends Component {
     onTrigger = (event) => {
        console.log('event::::', event);
        this.props.showMsg(
            event.target.myname.value
        );
        event.preventDefault();
    } 
  render() {
    return (
      <div>
        <h3>Child</h3>
        <div style={{color: this.props.userColor}}>Greeks for Greeks</div>
        <div style={{color: this.props.adminColor}}>Welcome to React</div>

        <form onSubmit={this.onTrigger}>
            <input type='text' placeholder='Enter Name' name="myname"/>
            <button type='submit' value="Submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default ClassChild


// https://chatgpt.com/share/67e16e47-64b0-8001-af01-4d8ccd95752b

