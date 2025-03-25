import React, { Component, PureComponent } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'
import Memo from './Memo'

class ParentCom extends Component {

constructor(props) {
  super(props)

  this.state = {
     name: 'Divya',
     message: 'Hello'
  }
}

/* componentDidMount Invoked immediately after a component & all its children components have been rendered to the DOM. */
componentDidMount() {
    setInterval(() => {
       this.setState({
            name: 'Divya'
       })
    }, 2000)
}
    

  render() {
  //  console.log('*********parent component render***********')
    return (
      <div className="containerFtn">
           <h2 className="ctn-head">Pure class component & Memo functional component</h2>
           <p>These two are used for prevents unneccessary renders <br></br> (without changes of props & state) can give you performace boot in certain scenarios.</p>
        <RegComp name={this.state.name}></RegComp>
        <PureComp name={this.state.name}></PureComp> 
        <Memo message={this.state.message}></Memo>
      </div>
    )
  }
}

/* class ParentCom extends PureComponent {

  constructor(props) {
    super(props)
  
    this.state = {
       name: 'Divya'
    }
  }
  
  componentDidMount() {
      setInterval(() => {
         this.setState({
              name: 'Divya'
         })
      }, 2000)
  }
      
  
    render() {
      console.log('*********parent component render***********')
      return (
        <div>
          ParentComponent
          <RegComp name={this.state.name}></RegComp>
          <PureComp name={this.state.name}></PureComp> 
        </div>
      )
    }
  } */

export default ParentCom
