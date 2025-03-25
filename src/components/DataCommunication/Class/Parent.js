import React, { Component } from 'react'
import ClassChild from './Child'

export class ClassParent extends Component {
    
    state  = {
        name: 'Hi'
    }
    handleCallBack = (childData) => {
        this.setState({name: childData})
    }
  render() {
    const wrapper = {
        border: "1px solid #b1b1b1",
        width: "30%",
        margin: "0 20px",
        borderRadius: "5px",
        padding: "20px"
    }
    const {name} = this.state
    return (
      <div style={wrapper}>
        <h4>Class Component</h4>
        <h5>Parent</h5>
        <div>{name}</div>
        <hr></hr>
        <ClassChild userColor="red" adminColor="yellow" showMsg={this.handleCallBack}></ClassChild>
      </div>
    )
  }
}

export default ClassParent
